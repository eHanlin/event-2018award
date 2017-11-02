#!/bin/bash
curl -X POST -H 'Content-Type: application/json' -d "{\"Repository\":\"event-2018award\",\"Tag\":\"${TRAVIS_TAG}\",\"Owner\":\"eHanlin\",\"Password\":\"${EHANLIN_PW}\", \"Name\": \"2018award\"}" 'https://www.ehanlin.com.tw/event/api/Deploy'
