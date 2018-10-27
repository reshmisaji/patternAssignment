#! /bin/bash
./run_test.sh ./src/triangle.js ./test/inputFileLeft ./test/expectedOutputLeft
./run_test.sh ./src/triangle.js ./test/inputFileRight ./test/expectedOutputRight

./run_test.sh ./src/rectangle.js ./test/inputFileFilledRectangle ./test/expectedOutputFilledRectangle
./run_test.sh ./src/rectangle.js ./test/inputFileEmptyRectangle ./test/expectedOutputEmptyRectangle
./run_test.sh ./src/rectangle.js ./test/inputFileAlternatingRectangle ./test/expectedOutputAlternatingRectangle

./run_test.sh ./src/diamond.js ./test/inputFileFilled ./test/expectedOutputFilled
./run_test.sh ./src/diamond.js ./test/inputFileHollow ./test/expectedOutputHollow
./run_test.sh ./src/diamond.js ./test/inputFileAngle ./test/expectedOutputAngle
