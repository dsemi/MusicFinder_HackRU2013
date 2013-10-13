#!/usr/bin/python2

from flask import Flask, render_template, request, url_for, redirect
from werkzeug.contrib.fixers import ProxyFix
from search.lyric_search import LyricSearch
app = Flask(__name__)
app.debug = True

app.searcher = LyricSearch()

@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        app.current_song = search_for_song(request.args.get('lyrics',''))[0]
        return "Success"

@app.route('/play.html')
def play():
    print app.current_song
    return render_template('play.html', trackData=app.current_song)

@app.route('/helper.html')
def helper():
    return render_template('helper.html')

def search_for_song(input):
    return app.searcher.search_by_lyrics(input)

app.wsgi_app = ProxyFix(app.wsgi_app)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=80)
