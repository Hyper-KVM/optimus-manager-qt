/*
 *  Copyright © 2019-2020 Hennadii Chernyshchyk <genaloner@gmail.com>
 *
 *  This file is part of Optimus Manager Qt.
 *
 *  Optimus Manager Qt is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Optimus Manager Qt is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a get of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

#include "optimussettings.h"
#include "daemonclient.h"

#include <QFile>

const QMap<bool, QString> OptimusSettings::s_boolMap = {{false, QStringLiteral("no")},
                                                        {true, QStringLiteral("yes")}};
const QMap<OptimusSettings::SwitchingMethod, QString> OptimusSettings::s_switchingMethodMap = {{NoneMethod, QStringLiteral("none")},
                                                                                               {Nouveau, QStringLiteral("nouveau")},
                                                                                               {Bbswitch, QStringLiteral("bbswitch")},
                                                                                               {AcpiCall, QStringLiteral("acpi_call")}};
const QMap<OptimusSettings::PciReset, QString> OptimusSettings::s_pciResetMap = {{NoReset, s_boolMap[false]},
                                                                                 {FunctionLevelReset, QStringLiteral("function_level")},
                                                                                 {HotReset, QStringLiteral("hot_reset")}};
const QMap<OptimusSettings::Driver, QString> OptimusSettings::s_driverMap = {{Modesetting, QStringLiteral("modesetting")},
                                                                             {IntelDriver, QStringLiteral("integrated")}};
const QMap<OptimusSettings::AccelMethod, QString> OptimusSettings::s_accelMethodMap = {{DefaultMethod, {}},
                                                                                       {SNA, QStringLiteral("sna")},
                                                                                       {XNA, QStringLiteral("xna")},
                                                                                       {UXA, QStringLiteral("uxa")}};
const QMap<OptimusSettings::TearFree, QString> OptimusSettings::s_tearFreeMap = {{DefaultTearFree, {}},
                                                                                 {EnableTearFree, s_boolMap[true]},
                                                                                 {DisableTearFree, s_boolMap[false]}};
const QMap<OptimusSettings::NvidiaOption, QString> OptimusSettings::s_nvidiaOptionMap = {{Overclocking, QStringLiteral("overclocking")},
                                                                                         {TripleBuffer, QStringLiteral("triple_buffer")}};

OptimusSettings::OptimusSettings(QObject *parent)
    : QSettings(detectConfigPath().first, QSettings::IniFormat, parent)
{
}

OptimusSettings::OptimusSettings(const QString &filename, QObject *parent) :
    QSettings(filename, QSettings::IniFormat, parent)
{
}

OptimusSettings::SwitchingMethod OptimusSettings::switchingMethod() const
{
    const QString method = value(QStringLiteral("optimus/switching")).toString();
    return s_switchingMethodMap.key(method, defaultSwitchingMethod());
}

void OptimusSettings::setSwitchingMethod(OptimusSettings::SwitchingMethod method)
{
    setValue(QStringLiteral("optimus/switching"), s_switchingMethodMap[method]);
}

OptimusSettings::SwitchingMethod OptimusSettings::defaultSwitchingMethod()
{
    return NoneMethod;
}

bool OptimusSettings::isPciPowerControlEnabled() const
{
    const QString powerControlString = value(QStringLiteral("optimus/pci_power_control")).toString();
    return s_boolMap.key(powerControlString, defaultPciPowerControlEnabled());
}

void OptimusSettings::setPciPowerControlEnabled(bool enable)
{
    setValue(QStringLiteral("optimus/pci_power_control"), s_boolMap[enable]);
}

bool OptimusSettings::defaultPciPowerControlEnabled()
{
    return false;
}

bool OptimusSettings::isPciRemoveEnabled() const
{
    const QString pciRemoveString = value(QStringLiteral("optimus/pci_remove")).toString();
    return s_boolMap.key(pciRemoveString, defaultPciRemoveEnabled());
}

void OptimusSettings::setPciRemoveEnabled(bool enable)
{
    setValue(QStringLiteral("optimus/pci_remove"), s_boolMap[enable]);
}

bool OptimusSettings::defaultPciRemoveEnabled()
{
    return false;
}

OptimusSettings::PciReset OptimusSettings::pciReset() const
{
    const QString pciResetString = value(QStringLiteral("optimus/pci_reset")).toString();
    return s_pciResetMap.key(pciResetString, defaultPciReset());
}

void OptimusSettings::setPciReset(PciReset type)
{
    setValue(QStringLiteral("optimus/pci_reset"), s_pciResetMap[type]);
}

OptimusSettings::PciReset OptimusSettings::defaultPciReset()
{
    return NoReset;
}

bool OptimusSettings::isAutoLogoutEnabled() const
{
    const QString terminateSessionsString = value(QStringLiteral("optimus/auto_logout")).toString();
    return s_boolMap.key(terminateSessionsString, defaultAutoLogoutEnabled());
}

void OptimusSettings::setAutoLogoutEnabled(bool enable)
{
    setValue(QStringLiteral("optimus/auto_logout"), s_boolMap[enable]);
}

bool OptimusSettings::defaultAutoLogoutEnabled()
{
    return true;
}

OptimusSettings::Driver OptimusSettings::integratedDriver() const
{
    const QString driverString = value(QStringLiteral("integrated/driver")).toString();
    return s_driverMap.key(driverString, defaultIntegratedDriver());
}

void OptimusSettings::setIntegratedDriver(OptimusSettings::Driver driver)
{
    setValue(QStringLiteral("integrated/driver"), s_driverMap[driver]);
}

OptimusSettings::Driver OptimusSettings::defaultIntegratedDriver()
{
    return Modesetting;
}

OptimusSettings::AccelMethod OptimusSettings::integratedAccelMethod() const
{
    const QString accelMethodString = value(QStringLiteral("intel/accel")).toString();
    return s_accelMethodMap.key(accelMethodString, defaultIntelAccelMethod());
}

void OptimusSettings::setIntelAccelMethod(OptimusSettings::AccelMethod method)
{
    setValue(QStringLiteral("intel/accel"), s_accelMethodMap[method]);
}

OptimusSettings::AccelMethod OptimusSettings::defaultIntelAccelMethod()
{
    return DefaultMethod;
}

OptimusSettings::TearFree OptimusSettings::integratedTearFree() const
{
    const QString tearFreeString = value(QStringLiteral("integrated/tearfree")).toString();
    return s_tearFreeMap.key(tearFreeString, defaultIntegratedTearFree());
}

void OptimusSettings::setIntegratedTearFree(OptimusSettings::TearFree tearFree)
{
    setValue(QStringLiteral("integrated/tearfree"), s_tearFreeMap[tearFree]);
}

OptimusSettings::TearFree OptimusSettings::defaultIntegratedTearFree()
{
    return DefaultTearFree;
}

OptimusSettings::DRI OptimusSettings::integratedDri() const
{
    return value(QStringLiteral("integrated/DRI"), defaultIntegratedDri()).value<DRI>();
}

void OptimusSettings::setIntegratedDri(OptimusSettings::DRI dri)
{
    setValue(QStringLiteral("integrated/DRI"), dri);
}

OptimusSettings::DRI OptimusSettings::defaultIntegratedDri()
{
    return DRI3;
}

bool OptimusSettings::isIntegratedModesetEnabled() const
{
    const QString modesetString = value(QStringLiteral("integrated/modeset")).toString();
    return s_boolMap.key(modesetString, defaultIntegratedModesetEnabled());
}

void OptimusSettings::setIntegratedModesetEnabled(bool enabled)
{
    setValue(QStringLiteral("integrated/modeset"), s_boolMap[enabled]);
}

bool OptimusSettings::defaultIntegratedModesetEnabled()
{
    return true;
}

bool OptimusSettings::isNvidiaModesetEnabled() const
{
    const QString modesetString = value(QStringLiteral("nvidia/modeset")).toString();
    return s_boolMap.key(modesetString, defaultNvidiaModesetEnabled());
}

void OptimusSettings::setNvidiaModesetEnabled(bool enabled)
{
    setValue(QStringLiteral("nvidia/modeset"), s_boolMap[enabled]);
}

bool OptimusSettings::defaultNvidiaModesetEnabled()
{
    return true;
}

bool OptimusSettings::isNvidiaPatEnabled() const
{
    const QString patString = value(QStringLiteral("nvidia/PAT")).toString();
    return s_boolMap.key(patString, defaultNvidiaPatEnabled());
}

void OptimusSettings::setNvidiaPatEnabled(bool enabled)
{
    setValue(QStringLiteral("nvidia/PAT"), s_boolMap[enabled]);
}

bool OptimusSettings::defaultNvidiaPatEnabled()
{
    return true;
}

int OptimusSettings::nvidiaDpi() const
{
    return value(QStringLiteral("nvidia/DPI"), defaultNvidiaDpi()).toInt();
}

void OptimusSettings::setNvidiaDpi(int dpi)
{
    if (dpi == 0)
        setValue(QStringLiteral("nvidia/DPI"), {});
    else
        setValue(QStringLiteral("nvidia/DPI"), dpi);
}

int OptimusSettings::defaultNvidiaDpi()
{
    return 96;
}

bool OptimusSettings::isNvidiaIgnoreAbi() const
{
    const QString ignoreAbiString = value(QStringLiteral("nvidia/ignore_abi")).toString();
    return s_boolMap.key(ignoreAbiString, defaultNvidiaIgnoreAbi());
}

void OptimusSettings::setNvidiaIgnoreAbi(bool ignore)
{
    setValue(QStringLiteral("nvidia/ignore_abi"), s_boolMap[ignore]);
}

bool OptimusSettings::defaultNvidiaIgnoreAbi()
{
    return false;
}

bool OptimusSettings::isNvidiaAllowExternalGpus() const
{
    const QString allowExternalGpuString = value(QStringLiteral("nvidia/allow_external_gpus")).toString();
    return s_boolMap.key(allowExternalGpuString, defaultNvidiaAllowExternalGpus());
}

void OptimusSettings::setNvidiaAllowExternalGpus(bool allow)
{
    setValue(QStringLiteral("nvidia/allow_external_gpus"), s_boolMap[allow]);
}

bool OptimusSettings::defaultNvidiaAllowExternalGpus()
{
    return false;
}

OptimusSettings::NvidiaOptions OptimusSettings::nvidiaOptions() const
{
    const QStringList optionStrings = value(QStringLiteral("nvidia/options"), nvidiaOptionsToStrings(defaultNvidiaOptions())).toStringList();
    return stringToNvidiaOptions(optionStrings);
}

void OptimusSettings::setNvidiaOptions(NvidiaOptions options)
{
    setValue(QStringLiteral("nvidia/options"), nvidiaOptionsToStrings(options));
}

OptimusSettings::NvidiaOptions OptimusSettings::defaultNvidiaOptions()
{
    return Overclocking;
}

QString OptimusSettings::permanentConfigPath()
{
    return QStringLiteral("/etc/optimus-manager/optimus-manager.conf");
}

QPair<QString, OptimusSettings::ConfigType> OptimusSettings::detectConfigPath()
{
    QFile tempPath(QStringLiteral("/var/lib/optimus-manager/temp_conf_path"));
    if (tempPath.open(QIODevice::ReadOnly))
        return {tempPath.readAll(), Temporary};

    return {permanentConfigPath(), Permanent};
}

OptimusSettings::ConfigType OptimusSettings::defaultConfigType()
{
    return Permanent;
}

QStringList OptimusSettings::nvidiaOptionsToStrings(NvidiaOptions options)
{
    QStringList optionStrings;
    for (auto it = s_nvidiaOptionMap.cbegin(); it != s_nvidiaOptionMap.cend(); ++it) {
        if (options.testFlag(it.key()))
            optionStrings.append(it.value());
    }

    return optionStrings;
}

OptimusSettings::NvidiaOptions OptimusSettings::stringToNvidiaOptions(const QStringList &optionStrings)
{
    NvidiaOptions options;
    for (auto it = s_nvidiaOptionMap.cbegin(); it != s_nvidiaOptionMap.cend(); ++it) {
        if (optionStrings.contains(it.value()))
            options |= it.key();
    }

    return options;
}
