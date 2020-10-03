let sidebar = {
    '/guide/': [
        {
            title: 'Introduction',
            collapsable: false,
            children: ['introduction']
        },
        {
            title: 'The Basics',
            collapsable: false,
            children: ['basictransformations', 'basicanimations']
        },
        {
            title: 'Art Assets',
            collapsable: false,
            children: ['assetcomposition', 'importingassets', 'assetreuse'],
        },
        {
            title: 'Keyframe Animation',
            collapsable: false,
            children: ['keyframeanimations', 'tween'],
        },

        {
            title: 'Advanced',
            children: ['renderlessanimations', 'cameracontrol'],
        },
        {
            title: "Homeless Shelter",
            children: [{
                title: 'User Input',
                children: ['mouseinput', 'keyboardinput'],
            }, 'domtransformations', 'matrixprop', 'positionclass', 'sampleassets', 'fastforwardandrewind', 'animationreuse'],
        }
    ],
};

module.exports = {
    runtimeCompiler: true,
    configureWebpack: (config) => {
        config.devtool = 'source-map'
    },

    extend: '@vuepress/theme-default',

    markdown: {
        lineNumbers: true,
    },

    plugins: [
        ['vuepress-plugin-container',
            {
                type: 'source',
                defaultTitle: "",
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
        ['vuepress-plugin-dehydrate',
            {
                // remove scripts
                noScript: [
                    // support glob patterns
                    'guide/*.html',
                    '**/static.html',
                ],
            },
        ],
    ],

    locales: {
        '/': {
            lang: 'en-US',
            title: 'BytePath',
            description: 'A Fun Animation Framework For Everyone'
        }
    },

    themeConfig: {
        repoLabel: 'Contribute!',
        // git repo here... gitlab, github
        repo: '',
        docsDir: 'docs',
        editLinks: true,
        docsBranch: 'dev',
        editLinkText: 'Help us improve this page!',
        search: false,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                lastUpdated: 'Last Updated',
                // service worker is configured but will only register in production
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh'
                    }
                },
                nav: [
                    {text: 'Docs', link: '/guide'},
                    // external link to git repo...again
                ],
                sidebar,
            }
        }
    }
};


//
// function getSideBar(folder, title) {
//     console.log("sidebar this", this);
//     const extension = [".md"];
//
//     const files = fs
//         .readdirSync(path.join(`${__dirname}/../${folder}`))
//         .filter(
//             (item) =>
//                 item.toLowerCase() != "readme.md" &&
//                 fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
//                 extension.includes(path.extname(item))
//         );
//
//     console.log("files is", [{ title: title, children: ["", ...files] }]);
//     return [{ title: title, children: ["", ...files] }];
// }

