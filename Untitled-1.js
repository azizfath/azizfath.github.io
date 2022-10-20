< !DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta charset = "utf-8" > < meta name = "viewport"
content = "width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no" / > < title > $ { authConfig.siteName } < /title> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"><meta name="description" content="Combining the power of Cloudflare Workers and Google Drive will allow you to index your files on the browser on Cloudflare Workers."><meta name="theme-color" content="#FF3300"><meta name="application-name" content="goindex"><meta name="robots" content="index, follow"><meta name="twitter:card" content="summary"><meta name="twitter:image" content="https:/ / i.imgur.com / rOyuGjA.gif "><meta name="
twitter: description " content="
Combining the power of Cloudflare Workers and Google Drive will allow you to index your files on the browser on Cloudflare Workers.
"><meta name="
keywords " content="
goindex, google, drive, goindex, gdindex, classic, material, workers - script, oauth - consent - screen, google - drive, cloudflare - workers, themes "><meta name="
twitter: title " content="
Goindex "><meta name="
twitter: url " content="
https: //github.com/alx-xlx/goindex"><link rel="shortcut icon" href="https://i.imgur.com/rOyuGjA.gif"><meta property="og:site_name" content="Goindex"><meta property="og:type" content="website"><meta property="og:image" content="https://i.imgur.com/rOyuGjA.gif"><meta property="og:description" content="Combining the power of Cloudflare Workers and Google Drive will allow you to index your files on the browser on Cloudflare Workers."><meta property="og:title" content="Goindex"><meta property="og:url" content="https://github.com/alx-xlx/goindex"><link rel="apple-touch-icon" href="https://i.imgur.com/rOyuGjA.gif"><link rel="icon" type="image/png" sizes="32x32" href="https://i.imgur.com/rOyuGjA.gif"><meta name="google-site-verification" content="OD_AXMYw-V6ID9xQUb2Wien9Yy8IJSyfBUyejYNB3CU"/><script async src="https://www.googletagmanager.com/gtag/js?id=UA-86099016-6"></script><script>window.dataLayer=window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'UA-86099016-6');</script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MR47R4M');</script> <style>@import url(${themeOptions.cdn}@${themeOptions.version}/goindex-acrou/dist/style.min.css); </style> <script>window.gdconfig=JSON.parse('${JSON.stringify({version: authConfig.version, themeOptions: themeOptions,})}'); window.themeOptions=JSON.parse('${JSON.stringify(themeOptions)}'); window.gds=JSON.parse('${JSON.stringify( authConfig.roots.map((it)=> it.name) )}'); window.MODEL=JSON.parse('${JSON.stringify(model)}'); window.current_drive_order=${current_drive_order}; </script>
    <
    /head> <
    body >
    <
    noscript > < iframe src = "https://www.googletagmanager.com/ns.html?id=GTM-MR47R4M"
height = "0"
width = "0"
style = "display:none;visibility:hidden" > < /iframe></noscript >
    <
    div id = "app" > < /div> <
    script src = "${themeOptions.cdn}@${
themeOptions.version
}
/goindex-acrou/dist / app.min.js "></script> <
    /body> <
    /html>