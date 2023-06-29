build:
	time=`date +'%Y%m%d%H%M%S'`; \
	zip -r dist/package_$${time}.zip index.js node_modules
