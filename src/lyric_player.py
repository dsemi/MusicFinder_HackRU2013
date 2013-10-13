#!/usr/bin/python2

from flask import Flask, render_template, request, url_for
from werkzeug.contrib.fixers import ProxyFix
from search.lyric_search import LyricSearch
app = Flask(__name__)
app.debug = True

app.searcher = LyricSearch()

@app.route('/', methods=['GET','POST'])
def index():
    return render_template('helper.html')
    # if request.method == 'GET':
    #     return render_template('index.html')
    # elif request.method == 'POST':
    #     return render_template('helper.html', trackData=search_for_song(request.form.get('lyrics','')))


@app.route('/renderhelper.js')
def helper():
    return render_template('js/helper.js', trackData={'title': 'Thunderstruck', 'artist': {'name': 'ACDC'}})

def search_for_song(input):
    return app.searcher.search_by_lyrics(input)

app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == '__main__':
    app.run()
