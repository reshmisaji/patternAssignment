#! /bin/bash
set -e
./run_test.sh ./src/triangleMain.js ./test/inputFileLeft ./test/expectedOutputLeft
./run_test.sh ./src/triangleMain.js ./test/inputFileRight ./test/expectedOutputRight

./run_test.sh ./src/rectangleMain.js ./test/inputFileFilledRectangle ./test/expectedOutputFilledRectangle
./run_test.sh ./src/rectangleMain.js ./test/inputFileEmptyRectangle ./test/expectedOutputEmptyRectangle
./run_test.sh ./src/rectangleMain.js ./test/inputFileAlternatingRectangle ./test/expectedOutputAlternatingRectangle

./run_test.sh ./src/diamondMain.js ./test/inputFileFilled ./test/expectedOutputFilled
./run_test.sh ./src/diamondMain.js ./test/inputFileHollow ./test/expectedOutputHollow
./run_test.sh ./src/diamondMain.js ./test/inputFileAngle ./test/expectedOutputAngle
