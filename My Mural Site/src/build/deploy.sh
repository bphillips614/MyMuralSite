#!/bin/bash

SRC=MyMuralSite.war;
DEST=~/Desktop/The\ Great\ Code\ Folder/Wildfly/standalone/deployments/MyMuralSite.war;
echo $SRC;
echo $DEST;
mv $SRC "$DEST";
echo 'Complete. Check for war file on Wildfly.';