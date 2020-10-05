# NestJS json-pipe

Pipes for base64 decoding and JSON parsing, useful for receiving complex objects via query params

# Usage 

Full example in `test` folder

```typescript
@Get('base64json')
base64json(@Query('test', Base64DecodePipe, JsonPipe) object: any): any {
    return object;
}
```
