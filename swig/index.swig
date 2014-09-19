<!DOCTYPE html>
<html>
    <head>
        <title>{{ title }}</title>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <main>
            <h3>{{ title }}</h3>
            <time></time>
            {% include 'weather.swig' with weather only %}
            <section am-columns="2">
                {% for group in bookmarks %}
                    {% include 'link_list.swig' with group only %}
                {% endfor %}
            </section>
        </main>
    </body>
    <script src="js/bundle.js"></script>
</html>