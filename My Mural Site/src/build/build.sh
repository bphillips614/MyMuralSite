#!/bin/bash

DEST=MyMuralSite.war;
SRC=../WebContent/*;
jar -cvf $DEST $SRC;
echo 'Done Building War File';