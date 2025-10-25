#!/bin/bash
while true
do
  git add .
  git commit -m "auto: update $(date)"
  git push origin main
  sleep 60  # كيعني كل دقيقة يعاود يرفع التغييرات
done
