#!/bin/sh
# -k keepalive
# -c concurrency
# -n requests
ab -k -c 20 -n 250 "http://localhost:3000/compute"