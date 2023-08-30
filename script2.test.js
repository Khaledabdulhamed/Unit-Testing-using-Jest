const swapi = require('./script2');


it('calls SWAPI to get people', () => {
    // expect.assertions(1);
   return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
    })
})

it('call SWAPI to get People with a promise', () => {
    swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGraterThan(5)
    })
})


it('get people returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0,1,2,3,4]
        })
    }))
    expect.assertions(2)
        return swapi.getPeoplePromise(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toBe(1)
            expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people')
        })
} )







