
var expect = require('chai').expect,
    tags = require('../lib/tags.js');

describe('Tags', function () {
    describe('#parse()', function () {
        it('should parse long formed tags', function () {
            var args = ['--depth=4', '--hello=world'];
            var results = tags.parse(args);
            
            expect(results).to.have.a.property('depth', 4);
            expect(results).to.have.a.property('hello', 'world');
        });
        
        it('should fall back to defaults', function () {
            var args = ['--depth=4', '--hello=world'];
            var defaults = {
                depth: 2,
                foo: 'bar'
            };
            var expected = {
                depth: 4,
                hello: 'world',
                foo: 'bar'
            };
            
            var results = tags.parse(args, defaults);
            
            expect(results).to.deep.equal(expected);
        });
        
        it('should accept tags without values as booleans', function () {
            var args = ['--searchContents'];
            var results = tags.parse(args);
            
            expect(results).to.have.a.property('searchContents', true);
        });
    });  
    
    describe('#parseValue', function () {
        it('should parse text as a string', function () {
            var args = 'hello',
                expected = args;
            var results = tags.parseValue(args);
            
            expect(results).to.equal(expected);
        });
        
        it('should parse a numeric value as a number', function () {
            var args = '4',
                expected = 4;
            
            var results = tags.parseValue(args);
            
            expect(results).to.equals(expected);
        });
    });
});