#!/bin/bash
# npm run-script build

echo "Build tamam ise sunucuya yüklemek istermisin?"
select yn in "yes-1" "no-2"; do
    case $yn in
        yes-1 ) echo islem tamam; break;;
        no-2 ) exit;;
    esac
done

echo "islem tamam..."