import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './firebase-service-account.json';

const firebaseParams = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CerUrl: serviceAccount.client_x509_cert_url,
};

export class PreauthMiddleware implements NestMiddleware {
  defualtApp: firebase.app.App;

  constructor() {
    this.defualtApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebaseParams),
    });
  }

  use(req: Request, res: Response, next: (error?: any) => void) {
    const token = req.headers.authorization;
    if (token != null && token != '') {
      console.log('d');
      const auth = this.defualtApp
        .auth()
        .verifyIdToken(token.replace('Bearer', ''))
        .then(async (decodedToken) => {
          const user = {
            email: decodedToken.email,
          };
          req['user'] = user;
          next();
        })
        .catch((error) => {
          console.error(error);
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }
  accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timeStamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}
