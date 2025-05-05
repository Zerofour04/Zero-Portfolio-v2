<script>
export default {
    data() {
        return {
            activeTab: 1,
            tech: [
                {
                    id: 1,
                    name: 'HTML',
                    imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
                    status: 'Erfahren'
                },
                {
                    id: 2,
                    name: 'CSS',
                    imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
                    status: 'Grundlagen'
                },
                {
                    id: 3,
                    name: 'JavaScript',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
                    status: 'Fortgeschritten'
                },
                {
                    id: 4,
                    name: 'TypeScript',
                    imageUrl:
                        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png',
                    status: 'Grundlagen'
                },
                {
                    id: 5,
                    name: 'Java',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/159/PNG/256/java_22523.png',
                    status: 'Grundlagen'
                },
                {
                    id: 6,
                    name: 'MySQL',
                    imageUrl:
                        'https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png',
                    status: 'Erfahren'
                },
                {
                    id: 7,
                    name: 'Lua',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_lua_icon_130410.png',
                    status: 'Fortgeschritten'
                },
                {
                    id: 8,
                    name: 'C#',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png',
                    status: 'Anfänger'
                },
                {
                    id: 9,
                    name: 'C++',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/cplusplus_original_logo_icon_146581.png',
                    status: 'Anfänger'
                },
                {
                    id: 10,
                    name: 'React',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png',
                    status: 'Grundlagen'
                },
                {
                    id: 11,
                    name: 'Vue / Nuxt',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png',
                    status: 'Fortgeschritten'
                },
                {
                    id: 12,
                    name: 'Php',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png',
                    status: 'Grundlagen'
                },
                {
                    id: 13,
                    name: 'Tailwind',
                    imageUrl: 'https://images.icon-icons.com/2107/PNG/512/file_type_tailwind_icon_130128.png',
                    status: 'Grundlagen'
                }
            ],
            tools: [
                {
                    id: 1,
                    name: 'NPM',
                    imageUrl:
                        'https://cdn.icon-icons.com/icons2/2415/PNG/512/npm_original_wordmark_logo_icon_146402.png',
                    status: 'Paketverwaltung'
                },
                {
                    id: 2,
                    name: 'Node.js',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png',
                    status: 'Laufzeitumgebung'
                },
                {
                    id: 3,
                    name: 'VS Code',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png',
                    status: 'IDE'
                },
                {
                    id: 4,
                    name: 'VS Studio',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/112/PNG/512/visual_studio_18908.png',
                    status: 'IDE'
                },
                {
                    id: 5,
                    name: 'GitHub',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/936/PNG/512/github-logo_icon-icons.com_73546.png',
                    status: 'Versionskontrolle'
                },
                {
                    id: 6,
                    name: 'Postman',
                    imageUrl: 'https://images.icon-icons.com/3053/PNG/512/postman_macos_bigsur_icon_189815.png',
                    status: 'API-Testing'
                },
                {
                    id: 7,
                    name: 'Asana',
                    imageUrl: 'https://static-00.iconduck.com/assets.00/asana-icon-2048x1893-0woxnfwz.png',
                    status: 'Projektmanagement'
                },
                {
                    id: 8,
                    name: 'Trello',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/836/PNG/512/Trello_icon-icons.com_66775.png',
                    status: 'Projektmanagement'
                },
                {
                    id: 9,
                    name: 'Plesk',
                    imageUrl: 'https://images.icon-icons.com/2389/PNG/512/plesk_logo_icon_144976.png',
                    status: 'Webserver'
                },
                {
                    id: 10,
                    name: 'Vercel',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/3915/PNG/512/vercel_logo_icon_249276.png',
                    status: 'Deployment'
                },
                {
                    id: 11,
                    name: 'Heroku',
                    imageUrl: 'https://cdn.icon-icons.com/icons2/2108/PNG/512/heroku_icon_130912.png',
                    status: 'Deployment'
                },
                {
                    id: 12,
                    name: 'ChatGPT',
                    imageUrl: 'https://images.icon-icons.com/4252/PNG/512/chatgpt_logo_chatgpt_logo_square_green_gpt_ia_openai_icon_264977.png',
                    status: 'Kreativität'
                },
                {
                    id: 13,
                    name: 'Cody',
                    imageUrl: 'https://storage.googleapis.com/sourcegraph-assets/cody/20230417/logomark-default.svg',
                    status: 'Copilot'
                },
            ]
        };
    }
};
</script>
<template>
    <div
        class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
        <article data-page="about">
            <header>
                <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
                    Über mich &nbsp;
                    <div
                        class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate"
                        data-aos="zoom-in-left"
                        data-aos-duration="600"></div>
                </div>
            </header>

            <section
                class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
                <div class="flex justify-center">
                    <img class="w-9/12 rounded-full mb-3 fadein-up" src="/img/about-personalpic.png" alt="Foto" />
                </div>
                <div class="md:w-7/12">
                    <p class="mb-3 md:mb-7 fadein-left fadeins-1">
                        &nbsp; &nbsp; &nbsp; Hallo, ich bin Ben Ho – leidenschaftlicher Entwickler und derzeit
                        Informatikstudent. In meinem aktuellen Werkstudentenjob als IT Junior Consultant mit Schwerpunkt
                        Webentwicklung entwickle ich moderne Webanwendungen mit aktuellen Technologien. In den
                        vergangenen Jahren habe ich vielseitige praktische Erfahrungen gesammelt – im Rahmen meines
                        Studiums, durch Praktika, eigene Entwicklungen und Open-Source-Projekte. Dabei habe ich nicht
                        nur neue Anwendungen konzipiert und umgesetzt, sondern auch bestehende Repositories optimiert
                        und weiterentwickelt. Insgesamt befasse ich mich mit der Planung und Umsetzung moderner
                        technischer Lösungen, die Prozesse vereinfachen, digitalisieren und verbessern.
                    </p>
                    <p class="mb-3 fadein-left fadeins-2">
                        &nbsp; &nbsp; &nbsp; Seit meiner Kindheit fasziniert mich alles rund um Technik. Besonders meine
                        Begeisterung für Computer und Videospiele hat mich dazu inspiriert, mich intensiv mit der
                        Programmierung auseinanderzusetzen. In diesem Prozess habe ich viele neue Fähigkeiten am
                        Computer entwickelt. Zusätzlich gehören Autos und Sport zu meinen großen Leidenschaften.
                    </p>
                </div>
            </section>
        </article>
    </div>

    <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
        <article data-page="about">
            <header>
                <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
                    <div
                        class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"
                        data-aos="zoom-in-left"
                        data-aos-duration="600"></div>
                    &nbsp; Fähigkeiten
                </div>
            </header>
            <section>
                <div>
                    <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
                        <li class="mr-2">
                            <button
                                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }"
                                @click="activeTab = 1">
                                Programmiersprachen
                            </button>
                        </li>
                        <li class="mr-2">
                            <button
                                class="inline-block px-4 py-3 rounded-lg hover:text-white"
                                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }"
                                @click="activeTab = 2">
                                Werkzeuge
                            </button>
                        </li>
                    </ul>
                </div>
                <div v-show="activeTab === 1">
                    <div
                        class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                        <div v-for="item in tech" :key="item.id">
                            <div
                                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div
                                    class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                                    <img
                                        alt="HTML"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        :src="item.imageUrl"
                                        style="color: transparent" />
                                </div>
                                <div class="flex items-center text-sm md:text-base lg:text-lg">
                                    <div
                                        class="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                                        {{ item.status }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeTab === 2">
                    <div
                        class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
                        <div v-for="item in tools" :key="item.id">
                            <div
                                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                                <div
                                    class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                                    <img
                                        alt="HTML"
                                        loading="lazy"
                                        width="32"
                                        height="32"
                                        decoding="async"
                                        data-nimg="1"
                                        class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                                        :src="item.imageUrl"
                                        style="color: transparent" />
                                </div>
                                <div class="flex items-center text-sm md:text-base lg:text-lg">
                                    <div
                                        class="tech font-medium text-secondary transition-all duration-300 translate-y-0">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                                        {{ item.status }}
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
.fadein-left {
    opacity: 0;
    animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeins-1 {
    animation-delay: 500ms;
}

.fadeins-2 {
    animation-delay: 800ms;
}

.img-tech,
.tech {
    transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
    transform: scale(1.3);
}

.item-tech:hover .tech {
    transform: translateY(-12px);
}

.item-tech:hover .status-tech {
    opacity: 1;
}
</style>
