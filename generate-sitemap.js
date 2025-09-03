const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const articles = require('./src/data/articles.json'); // Importiere die Artikel-Daten

// Sitemap generieren
async function generateSitemap() {
    const sitemap = new SitemapStream({ hostname: 'https://zerofour04.dev' });
    const writeStream = createWriteStream('./public/sitemap.xml');

    sitemap.pipe(writeStream);

    // Füge die statischen Seiten hinzu
    sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
    sitemap.write({ url: '/#/blog', changefreq: 'weekly', priority: 0.8 });

    // Dynamische URLs aus articles.json hinzufügen
    articles.forEach((article) => {
        sitemap.write({
            url: `/#/read/${article.slug}/${article.id}`,
            changefreq: 'monthly',
            priority: 0.6
        });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap wurde erfolgreich erstellt: ./public/sitemap.xml');
}

generateSitemap().catch((err) => {
    console.error('Fehler beim Erstellen der Sitemap:', err);
});
