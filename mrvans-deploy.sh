echo "Removing old data..."
rm ~/mrvans/dist -rf
rm ~/mrvans/dist.zip
echo "Moving new data..."
mv ~/dist.zip ~/mrvans
echo "Extracting new data..."
cd mrvans
unzip dist.zip
echo "DONE"
