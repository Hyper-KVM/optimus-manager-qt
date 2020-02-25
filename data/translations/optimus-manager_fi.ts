<?xml version="1.0" ?><!DOCTYPE TS><TS language="fi" version="2.1">
<context>
    <name>AppSettings</name>
    <message>
        <location filename="../../src/appsettings.cpp" line="75"/>
        <source>Unable to create autorun file from &apos;%1&apos;</source>
        <translation>Autorun-tiedostoa ei voi luoda osoitteesta &apos;%1&apos;</translation>
    </message>
</context>
<context>
    <name>DaemonClient</name>
    <message>
        <location filename="../../src/daemonclient.cpp" line="111"/>
        <source>Unable to open startup mode file</source>
        <translation>Käynnistystilan tiedostoa ei voi avata</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="354"/>
        <location filename="../../src/settingsdialog.cpp" line="101"/>
        <source>Unable to connect to Optimus Manager daemon: %1</source>
        <translation>Yhteyden muodostaminen Optimus Manager taustaprosessiin ei onnistu: %1</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="364"/>
        <source>Unable to send GPU name to switch to Optimus Manager daemon: %1</source>
        <translation>GPU-nimeä ei voi vaihtaa Optimus Manager -taustaprosessiin: %1</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="129"/>
        <source>Unable to send configuration file to Optimus Manager daemon: %1</source>
        <translation>Asetukset tiedostoa ei voi lähettää Optimus Manager -taustaprosessiin: %1</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="138"/>
        <source>Unable to send startup mode to Optimus Manager daemon: %1</source>
        <translation>Käynnistystilaa ei voi lähettää Optimus Manager taustaprosessiin: %1</translation>
    </message>
</context>
<context>
    <name>OptimusManager</name>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="174"/>
        <source>Switch to Intel</source>
        <translation>Vaihda Inteliin</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="175"/>
        <source>Switch to Nvidia</source>
        <translation>Vaihda Nvidiaan</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="65"/>
        <location filename="../../src/optimusmanager.cpp" line="176"/>
        <source>Exit</source>
        <translation>Poistu</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="60"/>
        <location filename="../../src/optimusmanager.cpp" line="61"/>
        <location filename="../../src/optimusmanager.cpp" line="62"/>
        <source>Switch to %1</source>
        <translation>Vaihda %1</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="152"/>
        <location filename="../../src/optimusmanager.cpp" line="161"/>
        <source>The specified icon &apos;%1&apos; for the current GPU is invalid. The default icon will be used.</source>
        <translation>Määritetty GPU kuvake &apos;%1&apos; on virheellinen. Oletuskuvaketta käytetään.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="152"/>
        <location filename="../../src/optimusmanager.cpp" line="161"/>
        <source>Invalid icon</source>
        <translation>Virheellinen kuvake</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="189"/>
        <source>You are about to switch GPU.</source>
        <translation>Olet vaihtamassa GPU:ta.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="191"/>
        <source>You will be automatically logged out to apply the changes.</source>
        <translation>Kirjaudut automaattisesti ulos ja muutokset tehdään.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="202"/>
        <source>No power management option is currently enabled</source>
        <translation>Mikään virranhallintavaihtoehto ei ole tällä hetkellä käytössä</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="203"/>
        <source>Switching between GPUs will work but you will likely experience poor battery life.
If you have already enabled the new Runtime D3 power management inside the Nvidia driver (for Turing+ GPU with Coffee Lake+ CPU), you can safely ignore this warning.</source>
        <translation>Vaihto GPU:n välillä toimii, mutta akun kesto on todennäköisesti heikko.
Jos olet jo ottanut käyttöön uuden D3-virranhallinnan Nvidia-ohjaimessa, voit ohittaa tämän varoituksen (vaihto + GPU with Coffee Lake + CPU).</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="213"/>
        <source>The Optimus Manager service is not running.</source>
        <translation>Optimus Manager -palvelu ei ole käynnissä.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="262"/>
        <source>There are %1 other desktop sessions open. The GPU switch will not become effective until you have manually logged out from ALL desktop sessions.
Continue?</source>
        <translation>Muita työpöydän istuntoja on %1. GPU-kytkentä ei tule voimaan, ennen kuin olet kirjautunut ulos manuaalisesti kaikista työpöydän istunnoista.
Jatka?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="277"/>
        <source>Wayland session found.</source>
        <translation>Wayland-istunto löytyi.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="278"/>
        <source>Session %1, started by %2, is a Wayland session. Wayland is not supported by Optimus Manager, so GPU switching may fail.
Continue anyway?</source>
        <translation>Istunto %1, jonka käynnisti %2, on Wayland-istunto. Optimus Manager ei tue Waylandia, joten GPU:n vaihto voi epäonnistua.
Jatka joka tapauksessa?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="295"/>
        <source>The Bumblebee service (%1) is running.</source>
        <translation>Bumblebee-palvelu (%1) on käynnissä.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="338"/>
        <source>The Xorg driver &apos;%1&apos; is not installed.</source>
        <translation>Xorg-ajuria &apos;%1&apos; ei ole asennettu.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="339"/>
        <source>Optimus Manager will use '%1' driver instead. You can change driver in settings or install the '%2' driver from the package '%3'.
Continue anyway?</source>
        <translation>Optimus Manager käyttää sen sijaan &apos;%1&apos; -ohjainta. Voit muuttaa ohjaimen asetuksissa tai asentaa &apos;%2&apos; -ohjaimen paketista &apos;%3&apos;.
Jatka joka tapauksessa?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="371"/>
        <source>Configuration successfully applied</source>
        <translation>Määrittely onnistui</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="371"/>
        <source>Your GPU will be switched after next login.</source>
        <translation>GPU vaihdetaan seuraavan kirjautumisen jälkeen.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="310"/>
        <source>If you did not create it yourself, it was likely generated by your distribution or by an Nvidia utility.
This file may contain hard-coded GPU configuration that could interfere with Optimus Manager, so it is recommended that you delete it before proceeding.
Ignore this warning and proceed with GPU switching?</source>
        <translation>Jos et luonut sitä itse, se on todennäköisesti tehty järjestelmääsi tai Nvidia-apuohjelman avulla.
Tämä tiedosto voi sisältää laitetason GPU-kokoonpanon, joka saattaa häiritä Optimus Manageria, joten on suositeltavaa poistaa se ennen jatkamista.
Ohita tämä varoitus ja jatka GPU:n vaihtoa?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="324"/>
        <source>This file was auto-generated by the Manjaro driver utility (MHWD). This will likely interfere with GPU switching, so Optimus Manager will delete this file automatically if you proceded with GPU switching.
Proceed?</source>
        <translation>Tämä tiedosto luotiin automaattisesti Manjaro ajuri-apuohjelmalla (MHWD). Tämä häiritsee todennäköisesti GPU:n vaihtoa, joten Optimus Manager poistaa tämän tiedoston automaattisesti, jos jatkat.
Jatketaanko?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="193"/>
        <source>After applying the settings, you will need to manually re-login to change the video card.</source>
        <translation>Kun olet asentanut asetukset, sinun täytyy kirjautua uudelleen manuaalisesti vaihtaaksesi videokortin.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="72"/>
        <location filename="../../src/optimusmanager.cpp" line="171"/>
        <source>Current videocard: %1</source>
        <translation>Nykyinen videokortti: %1</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="214"/>
        <source>Please enable and start it with:
'%1'
&apos;%2&apos;</source>
        <translation>Ota käyttöön ja käynnistä se seuraavasti:
&apos;%1&apos;
&apos;%2&apos;</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="224"/>
        <location filename="../../src/optimusmanager.cpp" line="236"/>
        <source>The %1 module does not seem to be available for the current kernel.</source>
        <translation>%1 moduuli ei näytä olevan käytettävissä nykyiselle ytimelle.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="225"/>
        <source>Power switching will not work.
You can set &apos;%1&apos; for GPU switching in settings or install bbswitch forthe default kernel with &apos;%2&apos; or for all kernels with &apos;%3&apos;.</source>
        <translation>Virran katkaisu ei toimi.
Voit asettaa &apos;%1&apos; GPU-kytkimille asetuksissa tai asentaa bbswitch-oletus ytimen, jossa on &apos;%2&apos;, tai kaikille ytimille, joilla on &apos;%3&apos;.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="237"/>
        <source>It is likely the Nvidia driver was not properly installed. GPU switching will probably fail, continue anyway?</source>
        <translation>On todennäköistä, että Nvidia-ohjainta ei ole asennettu oikein. GPU-kytkentä todennäköisesti epäonnistuu, jatka silti?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="247"/>
        <source>Looks like you&apos;re using a non-patched version of the Gnome Display Manager (GDM).</source>
        <translation>Näyttää siltä, että käytät Gnome Display Managerin (GDM) ei-korjattua versiota.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="248"/>
        <source>GDM need to be patched for Prime switching. Follow &lt;a href='https://github.com/Askannz/optimus-manager'&gt;this&lt;/a&gt; instructions to install a patched version. Without a patched GDM version, GPU switching will likely fail.
Continue anyway?</source>
        <translation>GDM on korjattava, jotta se voidaan vaihtaa. Asenna korjattu versio noudattamalla &lt;a href=&apos;https://github.com/Askannz/optimus-manager&apos;&gt;näitä &lt;/a&gt;ohjeita. Ilman korjattua GDM-versiota GPU-kytkentä todennäköisesti epäonnistuu.
Jatka joka tapauksessa?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="261"/>
        <source>Multiple running sessions detected.</source>
        <translation>Useita käynnissä olevia istuntoja havaittiin.</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="296"/>
        <source>This can interfere with Optimus Manager. Before attempting a GPU switch, it is recommended that you disable this service with '%1' and reboot your computer.
Ignore this warning and proceed with GPU switching now?</source>
        <translation>Tämä voi häiritä Optimus Manageria. Ennen kuin yrität GPU kytkentää, on suositeltavaa, että poistat tämän palvelun käytöstä painikkeella &apos;%1&apos; ja käynnistät tietokoneen uudelleen.
Ohita tämä varoitus ja jatka GPU:n vaihtamista nyt?</translation>
    </message>
    <message>
        <location filename="../../src/optimusmanager.cpp" line="309"/>
        <location filename="../../src/optimusmanager.cpp" line="323"/>
        <source>Found a Xorg config file at &apos;%1&apos;.</source>
        <translation>Löytyi Xorg config-tiedosto &apos;%1&apos;.</translation>
    </message>
</context>
<context>
    <name>SettingsDialog</name>
    <message>
        <location filename="../../src/settingsdialog.ui" line="14"/>
        <location filename="../../src/optimusmanager.cpp" line="56"/>
        <location filename="../../src/optimusmanager.cpp" line="173"/>
        <source>Settings</source>
        <translation>Asetukset</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="59"/>
        <location filename="../../src/settingsdialog.ui" line="118"/>
        <source>General</source>
        <translation>Yleinen</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="104"/>
        <source>About</source>
        <translation>Tietoja</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="137"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Application language&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sovelluksen kieli&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="140"/>
        <source>Language:</source>
        <translation>Kieli:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="45"/>
        <source>&lt;System language&gt;</source>
        <translation>&lt;System language&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="163"/>
        <source>Launch at startup</source>
        <translation>Käynnistä käynnistyksen yhteydessä</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="170"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Show confirmation dialog when switching GPU&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Näytä vahvistusikkuna, kun vaihdat GPU:n&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="173"/>
        <source>Confirm switching</source>
        <translation>Vahvista vaihtaminen</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="224"/>
        <source>Nvidia icon:</source>
        <translation>Nvidian kuvake:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="210"/>
        <source>Intel icon:</source>
        <translation>Intelin kuvake:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="304"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Specify which GPU will be used by default when the system boots&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Määritä, mitä GPU:ta käytetään oletuksena, kun järjestelmä käynnistyy&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="572"/>
        <source>ACPI call</source>
        <translation>ACPI kutsu</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="580"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Module used for power switching&lt;/p&gt;&lt;p&gt;If you select &amp;quot;None&amp;quot;, no power switching will be done at all (the Nvidia GPU will stay powered at all times)&lt;/p&gt;&lt;p&gt;If you use bbswitch, you will not be able to use video outputs attached to your Nvidia GPU in Intel mode&lt;/p&gt;&lt;p&gt;To use the bbswitch mode, the bbswitch module must be installed for your current kernel&lt;/p&gt;&lt;p&gt;You can install it for the default kernel with &amp;quot;pacman -S bbswitch&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Moduuli, jota käytetään vaihtoon&lt;/p&gt;&lt;p&gt;Jos valitset &quot;ei mitään&quot; &amp;quot;None&amp;quot, katkaisinta ei tehdä ollenkaan (NVIDIA GPU on aina päällä).&lt;/p&gt;&lt;p&gt;Jos käytät bbswitch-toimintoa, et voi käyttää Nvidia GPU -laitteeseen liitettyjä videolähtöjä Intel-tilassa&lt;/p&gt;&lt;p&gt;Bbswitch-tilan käyttämiseksi bbswitch-moduuli on asennettava nykyiselle ytimellesi&lt;/p&gt;&lt;p&gt;Voit asentaa sen ytimeen &amp;quot;pacman -S bbswitch&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="506"/>
        <source>Automatic logout</source>
        <translation>Automaattinen uloskirjautuminen</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="741"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to enable modesetting for the nouveau driver&lt;/p&gt;&lt;p&gt;Does not affect modesetting for the Intel GPU driver&lt;/p&gt;&lt;p&gt;This option is incompatible with Bbswitch and will be ignored if it is enabled&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Sallitaanko nouveau tilojen käyttöönotto vai ei&lt;/p&gt;&lt;p&gt;Ei vaikutusta Intel GPU -ohjaimen tilaan&lt;/p&gt;&lt;p&gt;Tämä vaihtoehto ei ole yhteensopiva bbswitchin kanssa, ja se jätetään huomiotta, jos se on käytössä&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="777"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This will be set using the Xsetup script passed to your login manager&lt;br/&gt;It will run the command&lt;/p&gt;&lt;p&gt;xrandr --dpi &amp;lt;dpi value&amp;gt;&lt;/p&gt;&lt;p&gt;Leave 0 for the default&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Tämä asetetaan Xsetup-sktiptin avulla kirjautumishallintaan&lt;br/&gt;Se suorittaa komennon&lt;/p&gt;&lt;p&gt;xrandr --dpi &amp;lt;dpi value&amp;gt;&lt;/p&gt;&lt;p&gt;Jätä oletusarvoksi 0&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="794"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether or not to enable the NVreg_UsePageAttributeTable option in the Nvidia driver &lt;span style=&quot; font-style:italic;&quot;&gt;Recommended&lt;/span&gt;, can cause poor CPU performance otherwise&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Otetaanko NVreg_UsePageAttributeTable vaihtoehto käyttöön Nvidia-ohjaimessa vai ei&lt;span style=&quot; font-style:italic;&quot;&gt;Suositus&lt;/span&gt;, voi muuten heikentää CPU suorittimen suorituskykyä</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="807"/>
        <source>Overclocking options</source>
        <translation>Ylikellotuksen asetukset</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="160"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;~/.config/autostart will be used&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;~/.config/autostart käytetään&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="183"/>
        <source>Tray icons</source>
        <translation>Valikon kuvakkeet</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="189"/>
        <location filename="../../src/settingsdialog.ui" line="196"/>
        <source>Choose icon</source>
        <translation>Valitse kuvake</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="307"/>
        <source>Startup mode:</source>
        <translation>Käynnistystila:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="557"/>
        <source>None</source>
        <translation>Mitään</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="124"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Interface language&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Käyttöliittymän kieli&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="203"/>
        <location filename="../../src/settingsdialog.ui" line="217"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path to the icon or icon name from theme&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Teeman kuvakkeen tai kuvakkeen nimen polku&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="270"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;GPU that will be used during normal system startup&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;GPU, jota käytetään normaalisti käynnistyksen aikana&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="616"/>
        <source>Driver:</source>
        <translation>Ajuri:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="657"/>
        <source>Acceleration method:</source>
        <translation>Kiihdytysmenetelmä:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="678"/>
        <location filename="../../src/settingsdialog.ui" line="710"/>
        <source>Default</source>
        <translation>Oletus</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="683"/>
        <source>Yes</source>
        <translation>Kyllä</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="485"/>
        <location filename="../../src/settingsdialog.ui" line="688"/>
        <source>No</source>
        <translation>Ei</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="513"/>
        <source>PCI reset:</source>
        <translation>PCI nollaus:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="481"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Reset the Nvidia card at the PCI level before reloading the nvidia module&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;No&lt;/span&gt;: does not perform any reset&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Function level&lt;/span&gt;: perform a light &amp;quot;function-level&amp;quot; reset&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Hot reset&lt;/span&gt;: perform a &amp;quot;hot reset&amp;quot; of the PCI bridge (this method messes with the hardware directly and will perform a PCI remove even if it disabled, please read the online documentation of Optimus Manager before using it)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Nollaa NVIDIA kortti PCI-tasolla, ennen kuin NVIDIA moduli ladataan uudelleen&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Ei&lt;/span&gt;: Nollaus toimintoa ei tehdä&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Toimintotaso&lt;/span&gt;: Suorita kevyt &quot;toimintotason&quot; nollaus&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Välitön nollaus&lt;/span&gt;: Suorittaa nollauksen suoraan PCI-siltaan (tämä menetelmä ajetaan suoraan laitteistoon ja suorittaa PCI:n poistamisen, vaikka se olisi poistettu käytöstä. Lue Optimus Manager -sovelluksen ohjeet verkossa ennen sen käyttöä)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="490"/>
        <source>Function level</source>
        <translation>Toimintotaso</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="495"/>
        <source>Hot reset</source>
        <translation>Välitön nollaus</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="536"/>
        <source>PCI remove</source>
        <translation>PCI poisto</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="623"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;DRI version&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;DRI versio&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="546"/>
        <source>PCI power control</source>
        <translation>PCI-tehon säätö</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="231"/>
        <source>Hybrid icon:</source>
        <translation>Hybridi kuvake:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="553"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Method to power switch the Nvidia card&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;None&lt;/span&gt;: do not use an external module for power management (for some laptop models it&apos;s preferable to use this option in combination with PCI power control), you can use the scipts nvidia-enable.sh and nvidia-disable.sh to execute custom commands for power management that will be executed only with this method&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Nouveau&lt;/span&gt;: load the nouveau module on the Nvidia card&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Bbswitch&lt;/span&gt;: power off the card using the bbswitch module (requires the &amp;quot;bbswitch&amp;quot;dependency)&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;ACPI call&lt;/span&gt;: try various ACPI method calls to power the card on and off (requires the &amp;quot;acpi_call&amp;quot; dependency)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Tavat kytkeä virta Nvidia-korteille on&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Ei mitään&lt;/span&gt;: Älä käytä ulkoista moduulia virranhallintaan (joissakin kannettavissa on parempi käyttää tätä vaihtoehtoa yhdessä PCI-tehonohjauksen kanssa). Voit käyttää skriptejä nvidia-enable.sh ja nvidia-disable.sh suorittaaksesi mukautettuja käskyjä virranhallintaan.&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Nouveau&lt;/span&gt;: lataa nouveau moduli Nvidia kortille&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Bbswitch&lt;/span&gt;:sammuta kortti bbswitch-modulin avulla (vaatii &quot;bbswitch&quot; riippuvuuden)&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;ACPI kutsu&lt;/span&gt;: Kokeile erilaisia ACPI-menetelmän kutsuja korttille. Vita päälle ja pois (vaatii &quot;acpi_call&quot; riippuvuuden) &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="543"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable PCI power management in Intel mode&lt;/p&gt;&lt;p&gt;This option is incompatible with ACPI call and Bbswitch switching methods, so it will be ignored in those cases&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ota PCI-virran hallinta käyttöön Intel-tilassa&lt;/p&gt;&lt;p&gt;Tämä vaihtoehto ei ole yhteensopiva ACPI- ja Bbswitch-kytkennän kanssa, joten se ohitetaan niissä jokatapauksessa&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="583"/>
        <source>Switching method:</source>
        <translation>Kytkentä tapa:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="503"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Automatically log out the current desktop session when switching GPUs&lt;/p&gt;&lt;p&gt;This feature is currently supported for Gnome, KDE Plasma, Deepin, Xfce, i3, Sway, Openbox, AwesomeWM and bspwm&lt;/p&gt;&lt;p&gt;If this options is disabled or you use a different desktop environment, GPU switching only becomes effective at the next graphical session login&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Kirjaudut ulos työpöydän istunnosta automaattisesti, kun vaihdat GPUta&lt;/p&gt;&lt;p&gt;Tällä hetkellä sitä tukee Gnome, KDE Plasma, Deepin, Xfce, i3, Sway, Openbox, AwesomeWM ja bspwm.&lt;/p&gt;&lt;p&gt;Jos tämä asetus on poistettu käytöstä tai käytät eri työpöytäympäristöä, GPU vaihto tulee voimaan vasta seuraavassa graafisessa istunnossa&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="68"/>
        <source>Configuration files</source>
        <translation>Määritetyt tiedostot</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="264"/>
        <source>Startup</source>
        <translation>Käynnistys</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="330"/>
        <source>Optimus Manager config</source>
        <translation>Optimus Manager asetus</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="399"/>
        <source>Type:</source>
        <translation>Tyyppi:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="339"/>
        <source>Path:</source>
        <translation>Polku:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="365"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Type of the configuration&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Permanent&lt;/span&gt;: configuration file that will be used every time it starts&lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Temporary&lt;/span&gt;: configuration file that will be used only once at the next boot&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Asetuksen valinta &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Pysyvä &lt;/span&gt;: Kokoonpanon tiedosto, jota käytetään käynnistyessä joka kerta. &lt;/p&gt;&lt;p&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;Tilapäinen&lt;/span&gt; : Asetus, jota käytetään vain kerran seuraavassa käynnistyksessä&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="369"/>
        <source>Permanent</source>
        <translation>Pysyvä</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="374"/>
        <source>Temporary</source>
        <translation>Väliaikainen</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="349"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path to configuration file that will be loaded&lt;/p&gt;&lt;p&gt;If such a file does not exist, then it will be created automatically&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Polkumääritys tiedostoon, joka ladataan&lt;/p&gt;&lt;p&gt;, jos tällaista tiedostoa ei ole, se luodaan automaattisesti&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="352"/>
        <source>Path to configuration file</source>
        <translation>Polku määritystiedostoon</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="385"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Browse configuration file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Selaa määritystiedosto&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="388"/>
        <source>Browse</source>
        <translation>Selaa</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="414"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Import Optimus Manager settings from file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Tuo Optimus Manager asetus tiedostosta&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="417"/>
        <source>Import</source>
        <translation>Tuo</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="430"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Export current settings to file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Vie nykyiset asetukset tiedostoon&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="433"/>
        <source>Export</source>
        <translation>Vie</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="533"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Remove the Nvidia card from the PCI bus&lt;/p&gt;&lt;p&gt;May prevent crashes caused by power switching&lt;/p&gt;&lt;p&gt;Ignored if switching method is Nouveau or Bbswitch&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Nvidia-kortin poistaminen PCI-väylästä&lt;/p&gt;&lt;p&gt;Voi estää virrankytkennän aiheuttamat kaatumiset&lt;/p&gt;&lt;p&gt;Suljettu pois, jos kytkentätapa on Nouveau tai Bbswitch &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="640"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Driver to use for the Intel GPU&lt;br/&gt;&lt;br/&gt;To use the Intel driver, you need to install the package &amp;quot;xf86-video-intel&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ohjainta käytetään Intelin GPU:ssa&lt;br/&gt;&lt;br/&gt;Intelin ohjaimen käyttäminen edellyttää pakettien asentamista &amp;quot;xf86-video-intel&amp;quot;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="674"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable TearFree option in the Xorg configuration&lt;/p&gt;&lt;p&gt;Only applies to the Intel driver&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ota TearFree-vaihtoehto käyttöön Xorg kokoonpanossa&lt;/p&gt;&lt;p&gt;Koskee vain Intel-ohjainta&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="706"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Acceleration method (corresponds to AccelMethod in the Xorg configuration)&lt;/p&gt;&lt;p&gt;Only applies to the Intel driver&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Kiihdytysmenetelmä (vastaa AccelMethodia Xorg-kokoonpanossa)&lt;/p&gt;&lt;p&gt;Koskee vain Intel-ohjainta &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="847"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable modesetting&lt;/p&gt;&lt;p&gt;Required for PRIME Synchronization (which prevents tearing)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Käytä moodien säätöä&lt;/p&gt;&lt;p&gt;Tarvitaan PRIME-synkronointiin (joka estää repeytymisen)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="857"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use Optimus Manager with external Nvidia GPUs (experimental)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Käytä Optimus Manageria ulkoisilla Nvidia-näytönohjaimilla (kokeellinen)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="837"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;If you&apos;re running an updated version of xorg-server (let&apos;s say to get PRIME Render offload enabled), the Nvidia driver may not load because of an ABI version mismatch&lt;/p&gt;&lt;p&gt;Enabling this option will allow loading the Nvidia driver&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Jos käytössäsi on xorg -serverin päivitetty versio (oletetaan, että PRIME renderin purku on käytössä), NVIDIA-ohjainta ei välttämättä ladata, koska ABI-versiot ei vastaa toisiaan.&lt;/p&gt;&lt;p&gt;Tämän asetuksen käyttöön ottaminen sallii NVIDIA-ohjaimen lataamisen&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="814"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable triple buffering&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Kolminkertainen puskurointi käyttöön&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="817"/>
        <source>Triple buffer</source>
        <translation>Kolminkertainen puskurointi</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="804"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable CoolBits in the Xorg configuration, which unlocks clocking options in the Nvidia control panel&lt;/p&gt;&lt;p&gt;Note: does not work in Hybrid mode&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ota CoolBits käyttöön Xorg-kokoonpanossa, joka avaa kellotuksen asetukset Nvidian ohjauspaneelissa&lt;/p&gt;&lt;p&gt;Huomautus: ei toimi hybriditilassa&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="840"/>
        <source>Ignore ABI</source>
        <translation>Ohita ABI</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="860"/>
        <source>Allow external GPUs</source>
        <translation>Salli ulkoiset GPU:t</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="917"/>
        <location filename="../../src/settingsdialog.ui" line="1048"/>
        <source>Version:</source>
        <translation>Versio:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="931"/>
        <location filename="../../src/settingsdialog.ui" line="1025"/>
        <source>Author:</source>
        <translation>Tekijä:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.ui" line="938"/>
        <location filename="../../src/settingsdialog.ui" line="1062"/>
        <source>License:</source>
        <translation>Lisenssi:</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="82"/>
        <source>Optimus Manager temporary configuration file path cannot be empty</source>
        <translation>Optimus Manager sovelluksen väliaikainen määritystiedoston polku ei voi olla tyhjä</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="89"/>
        <source>Optimus Manager temporary configuration file path cannot be a permanent configuration file path</source>
        <translation>Optimus Manager sovelluksen väliaikainen määritystiedoston polku ei voi olla pysyvän määritystiedoston polku</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="111"/>
        <source>Unable to read data from generated configuration</source>
        <translation>Tietojen lukeminen luodusta kokoonpanosta ei onnistu</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="245"/>
        <source>Select temporary configuration file</source>
        <translation>Valitse väliaikainen määritystiedosto</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="246"/>
        <location filename="../../src/settingsdialog.cpp" line="258"/>
        <location filename="../../src/settingsdialog.cpp" line="271"/>
        <source>Config files (*.conf);;All files(*)</source>
        <translation>Määritystiedostot (*.conf);;Kaikki tiedostot(*)</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="257"/>
        <source>Export Optimus Manager settings</source>
        <translation>Vie Optimus Manager asetukset</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="270"/>
        <source>Import Optimus Manager settings</source>
        <translation>Tuo Optimus Manager asetukset</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="428"/>
        <source>Select icon</source>
        <translation>Valitse kuvake</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="429"/>
        <source>Images (*.png *.jpg *.bmp);;All files(*)</source>
        <translation>Kuvat (*.png *.jpg *.bmp);;Kaikki tiedostot(*)</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="460"/>
        <source>Unable to find Optimus Manager daemon.</source>
        <translation>Optimus Manager -taustaprosessia ei löydy.</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="461"/>
        <source>Please check the integrity of the package that provides Optimus Manager.</source>
        <translation>Tarkista Optimus Manageria tarjoavan paketin eheys.</translation>
    </message>
    <message>
        <location filename="../../src/settingsdialog.cpp" line="463"/>
        <source>Not found!</source>
        <translation>Ei löydetty!</translation>
    </message>
</context>
</TS>