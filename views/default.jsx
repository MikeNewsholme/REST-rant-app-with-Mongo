const React = require('react')

function Def(html){
    return (
        <html>
            <head>
                <title>TITLE
                </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}


module.exports = Def