<!DOCTYPE html>
<html>
    <head>
        <title>{{ title }}</title>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <main>
            <h3>{{ title }}</h3>
            {% include 'weather.swig' with weather only %}
            <section am-columns="3">
                <ul>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                </ul>
                <ul>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                </ul>
                <ul>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                    <li>thing</li>
                </ul>
            </section>
        </main>
    </body>
    <script src="js/bundle.js"></script>
</html>