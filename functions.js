function readAndParseFile(filePath) {
    // check if filePath exists
    if (fs.existsSync(filePath)) {
        const rawdata = fs.readFileSync(filePath);
        const data = JSON.parse(rawdata);
        return data;
    } else {
        throw new Error(`File ${ filePath } does not exist`);
    }
}

// create unit test for the readAndParseFile function using the data.json file
describe('readAndParseFile', function() {
    it('should read and parse the data.json file', function() {
        expect(readAndParseFile('data.json')).toEqual({
            "name": "John Doe",
            "age": 30,
            "city": "New York"
        });
    });
    it('should throw an error if the file does not exist', function() {
        expect(() => readAndParseFile('data2.json')).toThrowError('File data2.json does not exist');
    });
});


function setApiKeys(conversationData, appsettingsFilePath) {
    const appsettings = readAndParseFile(appsettingsFilePath);
    for (const key in appsettings.connectionIDs) {
        // setVariable(variableName, var_value, conversationData, userProfile)
        // Gets variableName from the voiceflow file and sets this to information from appsettings
        setVariable(key + '_key', appsettings.connectionIDs[key].Authorization, conversationData, null);
        setVariable(key + '_url', appsettings.connectionIDs[key].endpoint, conversationData, null);
    }
}

// create unit test for the setApiKeys function using the data.json file
describe('setApiKeys', function() {
    it('should set the api keys', function() {
        const conversationData = {};
        setApiKeys(conversationData, 'data.json');
        expect(conversationData).toEqual({
            "weather_key": "1234567890",
            "weather_url": "https://api.weather.com",
            "news_key": "0987654321",
            "news_url": "https://api.news.com"
        });
    });
});