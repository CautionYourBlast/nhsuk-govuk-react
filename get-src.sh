#!/bin/sh

rm -rf zip && rm -rf src && mkdir zip && mkdir src && cd zip && \
curl -sSL https://github.com/NHSDigital/nhsuk-react-components/archive/main.zip > file.zip && \
unzip file.zip                                  && \
mv -v ./nhsuk-react-components-main/src .. && \
rm -rf nhsuk-react-components-main