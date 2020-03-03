package main

import (
		"log"
		"strconv"
    "net/http"
)

type server struct {

}

func (s *server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	switch r.Method {
	case "GET":
			log.Print("get called")
			w.WriteHeader(http.StatusOK)
			w.Write([]byte(`{"message": "get called"}`))
	case "POST":
			w.WriteHeader(http.StatusCreated)
			w.Write([]byte(`{"message": "post called"}`))
	case "PUT":
			w.WriteHeader(http.StatusAccepted)
			w.Write([]byte(`{"message": "put called"}`))
	case "DELETE":
			w.WriteHeader(http.StatusOK)
			w.Write([]byte(`{"message": "delete called"}`))
	default:
			w.WriteHeader(http.StatusNotFound)
			w.Write([]byte(`{"message": "not found"}`))
	}
}

func main() {

		port := 4001
    s := &server{}
		http.Handle("/", s)
		log.Print("Listening on port " + strconv.Itoa(port) + ": \n")
		log.Fatal(http.ListenAndServe(":" + strconv.Itoa(port), nil))

}