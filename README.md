# NewspaperNgApp

This is a frontend application developed with **Angular**.
Consumes a backend to enable token-based authentication and manage 2 entities: Post and Comments.
These entities keep a **ONE-TO-MANY** relationship.

## Environment

**OS** CentOS 8.4  
**Framework** Angular 13.2.5  
**Package Manager** npm 8.5.3  
**Node.js** 16.13.1

## Deployment

1. At the project level directory, install dependencies
```
npm install
```
2. Update the backend endpoints IP at the **src/environments/environment.ts** file

3. Run the application
```
ng serve
```

