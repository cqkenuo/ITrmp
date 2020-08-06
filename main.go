package main

import (
	// golang src

	"fmt"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"path/filepath"
	"strconv"

	"golang.org/x/net/websocket"
)

var i int = 0

func main() {
	http.Handle("/echo", websocket.Handler(echo))
	http.HandleFunc("/", xyWebIndex)
	log.Println(http.ListenAndServe("127.0.0.1:80", nil))
}
func xyWebIndex(w http.ResponseWriter, r *http.Request) {
	var reqURLExt string = filepath.Ext(r.URL.Path)
	var reqURL string = r.URL.Path
	var res []byte
	//var err error

	//log.Println(reqURL)

	switch reqURLExt {
	case ".css":
		w.Header().Set("Content-Type", "text/css")
	case ".png":
		w.Header().Set("Content-Type", "image/png")
	case ".ico":
		w.Header().Set("Content-Type", "image/x-ico")
	case ".js":
		w.Header().Set("Content-Type", "application/javascript")
	case ".jpg":
		w.Header().Set("Content-Type", "image/jpeg")
	default:
		w.Header().Set("Content-Type", "text/html")
	}

	// 首页
	switch reqURL {
	default:
		res, _ = ioutil.ReadFile(reqURL[1:])
	}

	w.Write(res)
}

func echo(ws *websocket.Conn) {
	var err error
	for {
		var reply string

		if err = websocket.Message.Receive(ws, &reply); err != io.EOF && err != nil {
			fmt.Println("web rece err", err)
			continue
		}
		if reply == "" {
			continue
		}
		fmt.Println("web copy that:", reply)

		if err = websocket.Message.Send(ws, strconv.Itoa(i)); err != nil {
			fmt.Println("web send err", err)
			continue
		}
		i++
	}
}
