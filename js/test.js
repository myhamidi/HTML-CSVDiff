function test_passed(fname) {
    console.log(fname + '  OK')
}

function test_failed(fname) {
    console.log(fname + '  failed')
}

class clsTest {

    test_loadForms() {
        name = "LoadForms"
        var res = myForm1 == undefined || myForm2 == undefined
        if (res) {
            test_failed(name)}
        else {
            test_passed(name)}
    }

    test_CSVFile() {
        name = "CSVFile"
        var res = csvFile1 == undefined || csvFile2 == undefined
        if (res) {
            test_failed(name)}
        else {
            test_passed(name)}
    }

    run() {

    }

}

test = new clsTest()
test.test_loadForms()
test.test_CSVFile()

