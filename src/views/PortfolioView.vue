<script>
export default {
    data() {
        return {
            activeTab: 1,
            items: [
                {
                    id: 1,
                    name: 'Nextcloud-One Bestellformular',
                    imageUrl: 'ncorderform',
                    status: 'Dieses Projekt ist ein modernes WordPress-Plugin zur Integration von Nextcloud-Hostingplänen mit Stripe-Zahlungsabwicklung. Es bietet ein sechsstufiges Bestellformular mit Domainverfügbarkeitsprüfung, USt-ID-Validierung, dynamischer Preisberechnung und vollständiger Mehrsprachigkeit (DE/EN). Kunden können flexibel zwischen Sandbox- und Live-Umgebungen wählen. Das Plugin verfügt über eine Verwaltungsoberfläche im WordPress-Backend und nutzt die Stripe-API für Produkt- und Kundenmanagement inklusive Metadaten-Zuordnung.',
                    tech: 'Vue 3, Vite, TailwindCSS, Pinia, Stripe API, WordPress, Nextcloud',
                    github: 'null',
                    demo: 'https://staging.nextcloud-one.com/buy-now/'
                },
                {
                    id: 2,
                    name: 'Owncloud-Online Bestellformular',
                    imageUrl: 'ooorderform',
                    status: 'Dieses Projekt ist ein umfassendes Bestellformular, entwickelt mit Vue.js, Formkit und TailwindCSS. Es unterstützt einen mehrstufigen Bestellprozess mit Echtzeit-Berechnungen, Validierungen und einer vollständigen Zahlungsabwicklung über Billwerk. Die Anwendung ist als WordPress-Plugin konzipiert und ermöglicht die zentrale Verwaltung von API-Keys und Konfigurationen über ein benutzerfreundliches Admin-Panel. Zudem bietet es eine Domainverfügbarkeitsprüfung, Umsatzsteuer-ID-Validierung, Mehrsprachigkeit (DE/EN) und ein modernes responsives Design.',
                    tech: 'Vue 3, Vite, Formkit, TailwindCSS, i18n, WordPress REST API, Billwerk',
                    github: 'null',
                    demo: 'https://staging.nextcloud-one.com/buy-now/'
                },
                {
                    id: 3,
                    name: 'Owncloud-Online Kundenportal',
                    imageUrl: 'oocustomerd',
                    status: 'Dieses Kundenportal wurde für ownCloud entwickelt und ermöglicht es Nutzer:innen, ihre Abonnements selbstständig zu verwalten. Es wurde als WordPress-Plugin in PHP realisiert und integriert die Billwerk-API für Vertragsverwaltung, Zahlungen und Produktänderungen. Das Portal bietet eine benutzerfreundliche Oberfläche, auf der Kunden ihre Rechnungen einsehen, Zahlungsmethoden aktualisieren und Tarife anpassen können – alles DSGVO-konform und vollständig in die bestehende WordPress-Umgebung integriert.',
                    tech: 'PHP, WordPress, Billwerk API',
                    github: 'null',
                    demo: 'https://owncloud.online/'
                },
                {
                    id: 4,
                    name: 'Autovermietung Suchfunktion',
                    imageUrl: 'carrental',
                    status: 'RentMyCar ist eine moderne Autovermietungsplattform, die mit Nuxt 3, Vue 3 und Vuetify entwickelt wurde. Sie bietet eine benutzerfreundliche Oberfläche zum Durchsuchen, Filtern und Verwalten von Fahrzeugen in Echtzeit. Zu den Funktionen zählen ein dynamischer Fahrzeugkatalog, ein fortschrittliches Filtersystem mit Sitzungsübergreifender Speicherung, internationale Mehrsprachigkeit (DE/EN) und ein responsives Design. Die Plattform wird durch ein Strapi-Backend unterstützt und ermöglicht eine umfassende Verwaltung und Pflege der Fahrzeugdaten über eigene API-Endpunkte.',
                    tech: 'Nuxt 3, Vue 3, Vuetify 3, Pinia, i18n, Strapi',
                    github: 'https://github.com/Zerofour04/CarRental-NuxtJS',
                    demo: 'null'
                },
                {
                    id: 5,
                    name: 'Mitarbeiter-Liste',
                    imageUrl: 'employeesAdmin',
                    status: 'Das webbasierte IT-Projekt wurde während meines Praktikums für ein Unternehmen entwickelt. Diese Plattform verfügt über verschiedene Funktionen wie das Sperren von Mitarbeitern, das Unsichtbarmachen oder die Zuweisung in Gruppen sowie die Möglichkeit, Urlaubszeiten anzugeben. Bis heute wird dieses System aktiv von der Firma genutzt und bietet eine zentrale und benutzerfreundliche Lösung zur Verbesserung der Teamarbeit und zur effizienten Verwaltung von Aufgaben.',
                    tech: 'ReactTS, Azure, MSAL, Redux',
                    github: 'https://github.com/Zerofour04/React-TS-Employee-Management',
                    demo: 'null'
                },
                {
                    id: 6,
                    name: 'ToDo-Liste',
                    imageUrl: 'toDolist',
                    status: 'Dies ist eines meiner ersten Projekte, das mit ReactJS entwickelt wurde. Es diente als Gelegenheit, verschiedene Funktionen zu erkunden und zu implementieren, um ein besseres Verständnis für die Funktionsweise von ReactJS zu entwickeln. Die Todos werden separat in einem JSON-Server gespeichert, was eine einfache und effiziente Datenverwaltung ermöglicht. Die Todoliste bietet eine intuitive Benutzeroberfläche, die es Benutzern ermöglicht, neue Todos zu erstellen, bestehende Todos zu bearbeiten und nicht mehr benötigte Todos zu löschen.',
                    tech: 'ReactJS, JSON-Server',
                    github: 'https://github.com/Zerofour04/React-JS-ToDoList',
                    demo: 'null'
                },
                {
                    id: 7,
                    name: 'Java-Spiel',
                    imageUrl: 'javagame',
                    status: 'Dieses Java-Spiel wurde im Rahmen einer schulischen Aufgabe mit Greenfoot entwickelt. Es stellt eine spannende Möglichkeit dar, die Grundlagen der objektorientierten Programmierung mit Java zu erlernen und anzuwenden. Das Spiel simuliert eine Verfolgungsjagd, bei der der Spieler mit einem Auto vor der Polizei flüchten muss, die ihn intensiv verfolgt. Dabei muss der Spieler geschickt neun Autos zerstören, um Punkte zu sammeln und seine Flucht zu verbessern. Durch geschicktes Manövrieren und Taktieren kann der Spieler entkommen, während die Polizei versucht, ihn zu schnappen.',
                    tech: 'Java, Greenfoot',
                    github: 'https://github.com/Zerofour04/Greenfoot-game',
                    demo: 'https://zerofour04.github.io/Greenfoot-game/'
                },
                {
                    id: 8,
                    name: 'Abiseite',
                    imageUrl: 'abipage',
                    status: 'Diese Abiseite wurde speziell von mir für unsere Klasse entwickelt, um sicherzustellen, dass jeder Teilnehmer über alle relevanten Details informiert ist. Neben grundlegenden Informationen über Unterkunft und Anreisemöglichkeiten habe ich auch verschiedene APIs in die Website integriert, darunter eine Wettervorhersage, um sicherzustellen, dass unsere Abschlussfeier reibungslos verläuft und alle Gäste bestmöglich informiert sind. In naher Zukunft plane ich außerdem die Entwicklung einer weiteren Seite, die die besonderen Momente unserer Abschlussfeier festhält.',
                    tech: 'ReactJS, JavaScript, Server',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 9,
                    name: 'Discord Bot',
                    imageUrl: 'discordbot',
                    status: 'Ich habe einen Discord-Bot entwickelt, um die meisten anderen Bots auf meinem Server zu ersetzen. Dabei wurde er speziell entworfen, um unsere Servergemeinschaft zu unterstützen und das Discord-Erlebnis für alle Mitglieder zu verbessern. Neben grundlegenden Funktionen wie Moderation und Verwaltung bietet der Bot auch spezielle Features, die das Nutzererlebnis bereichern. Dazu gehören die Integration verschiedener APIs für nützliche Informationen oder Unterhaltungszwecke sowie die Möglichkeit, Musik mithilfe von YouTube-APIs abzuspielen.',
                    tech: 'JavaScript, Discord-Bot',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 10,
                    name: 'Spotify',
                    imageUrl: 'spotify',
                    status: 'Eines meiner ersten Projekte war außerdem eine Spotify-Anwendung, mit der man seine Musik sofort über eine eigene Schnittstelle steuern konnte. Die umfangreiche Funktionalität der Spotify-API eröffnet zahlreiche kreative Möglichkeiten für die Entwicklung innovativer Projekte im Zusammenhang mit Musik und Audio-Streaming.',
                    tech: 'ReactJS, JavaScript',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 11,
                    name: 'Portfolio Page',
                    imageUrl: 'portfoliopage',
                    status: 'Was ebenfalls nicht fehlen darf, ist eine individuelle Seite für jeden Entwickler, und das gilt auch für mich. Zuerst habe ich meine eigene Seite erstellt, jedoch später andere Projekte geforkt, da das Design einfach viel ansprechender war. Dabei habe ich nicht nur mein Design verbessert, sondern auch viel über Server und Domains gelernt. Dies eröffnete mir neue Perspektiven und half mir, meine Fähigkeiten in der Webentwicklung weiter auszubauen.',
                    tech: 'React, Server, Domain',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 12,
                    name: 'FiveM Vehicle Models',
                    imageUrl: 'carpack',
                    status: 'Während der Zeit der Corona-Pandemie habe ich die Gelegenheit genutzt, um mich intensiv mit FiveM zu beschäftigen. In dieser Phase begann ich, mich mit der Programmierung in LUA und der Gestaltung von Benutzeroberflächen (UI) auseinanderzusetzen. Darüber hinaus vertiefte ich meine Kenntnisse im Designbereich durch die Arbeit mit Photoshop sowie im 3D-Modellieren von Fahrzeugen, die im Spiel mit benutzerdefinierten Texturen geladen wurden.',
                    tech: '3D-Modeling, UI, LUA',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 13,
                    name: 'Mehr FiveM Projekte',
                    imageUrl: 'rimspack',
                    status: 'Bis heute arbeite ich weiterhin an FiveM-Skriptprojekten, die alle auf GitHub eingesehen werden können. Während die meisten Entwickler eine Bezahlung verlangen, bin ich entschlossen, alles als Open-Source zu halten.',
                    tech: 'LUA',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 14,
                    name: 'Scratch-Spiel',
                    imageUrl: 'Scratch',
                    status: 'Dies war mein erstes Programmierprojekt, das ich in der 9. Klasse mit Scratch erstellt habe. In diesem Projekt musste ich verschiedene Befehlsblöcke miteinander verknüpfen, um das Spiel zu entwickeln. Inspiriert von Rocket League, einer beliebten Videospielreihe, habe ich ein einfaches 2D-Spiel entworfen. Es war eine spannende Erfahrung, meine kreativen Ideen in die Praxis umzusetzen und dabei grundlegende Programmierkonzepte kennenzulernen. Dieses Projekt war der Anfang meiner Leidenschaft für die Programmierung und hat mich dazu motiviert, mein Wissen und meine Fähigkeiten in diesem Bereich weiter auszubauen.',
                    tech: 'Logische/Visuelle Programmierung',
                    github: 'null',
                    demo: 'null'
                },
                {
                    id: 15,
                    name: 'Mehr auf GitHub',
                    imageUrl: 'error',
                    status: 'Ach, bist du schon hier? Das ist erst der Anfang meiner Projekte! Um alle meine Arbeiten zu entdecken, würde es zu lange dauern, sie alle hier aufzuführen. Stattdessen findet ihr sie alle auf meinem GitHub-Profil. Ich würde mich freuen, wenn ihr vorbeischaut!',
                    tech: 'LUA',
                    github: 'null',
                    demo: 'null'
                }
            ]
        };
    }
};
</script>
<template>
    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <article data-page="about">
            <header>
                <div
                    class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
                    <!-- <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div> -->
                    <h4>Projekte:</h4>
                    <h4
                        class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
                        Entdecke Projekte, an denen ich bisher gearbeitet habe.
                    </h4>
                </div>
            </header>
            <section>
                <div>
                    <div
                        class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
                        <div v-for="item in items" :key="item.id">
                            <div
                                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5">
                                <div
                                    class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                                    <img
                                        alt="HTML"
                                        loading="lazy"
                                        decoding="async"
                                        data-nimg="1"
                                        class="drop-shadow-xl rounded rounded-xl"
                                        :src="'/img/portfolio-' + item.imageUrl + '.png'" />
                                </div>
                                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                                    <div class="title-text font-medium text-secondary">{{ item.name }}</div>
                                    <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                                        {{ item.status }}
                                    </div>
                                    <div class="w-full mt-4 text-normal text-sm text-left text-amber-200">
                                        {{ item.tech }}
                                    </div>
                                    <div class="w-full flex justify-end">
                                        <div class="flex cursor-pointer items-end gap-2 text-primary">
                                            <a
                                                v-if="item.github !== 'null'"
                                                :href="item.github"
                                                target="_blank"
                                                rel="noreferrer"
                                                title="View github repository"
                                                class="transition-all hover:text-accent">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    height="16"
                                                    width="16"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg
                                            ></a>
                                            <a
                                                v-if="item.demo !== 'null'"
                                                :href="item.demo"
                                                target="_blank"
                                                rel="noreferrer"
                                                title="View finished project"
                                                class="transition-all hover:text-accent">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    height="18"
                                                    width="18"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line></svg
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    </div>
</template>

<style>
.item-card:hover {
    transition: transform 0.3s ease;
    transform: translateY(-8px);
}
svg:hover {
    stroke: #ffdb70;
}
@keyframes fadeZoomIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
    animation: fadeZoomIn 1s ease-in-out;
}
</style>
