#! /bin/bash
set -e
./run_test.sh ../triangle_main.js ../appTestData/input/inputFileLeft ../appTestData/output/expectedOutputLeft
./run_test.sh ../triangle_main.js ../appTestData/input/inputFileRight ../appTestData/output/expectedOutputRight

./run_test.sh ../rectangle_main.js ../appTestData/input/inputFileFilledRectangle ../appTestData/output/expectedOutputFilledRectangle
./run_test.sh ../rectangle_main.js ../appTestData/input/inputFileEmptyRectangle ../appTestData/output/expectedOutputEmptyRectangle
./run_test.sh ../rectangle_main.js ../appTestData/input/inputFileAlternatingRectangle ../appTestData/output/expectedOutputAlternatingRectangle

./run_test.sh ../diamond_main.js ../appTestData/input/inputFileFilled ../appTestData/output/expectedOutputFilled
./run_test.sh ../diamond_main.js ../appTestData/input/inputFileHollow ../appTestData/output/expectedOutputHollow
./run_test.sh ../diamond_main.js ../appTestData/input/inputFileAngle ../appTestData/output/expectedOutputAngle
