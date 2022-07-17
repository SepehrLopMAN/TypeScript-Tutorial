/*
 *  interface A {
 *      a(): void
 *  }
 *
 *  interface B extends A {
 *      b(): void
 *  }
 */

interface Mailable {
  send(email: string): boolean;
  queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
  later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
  later(email: string, after: number): boolean {
    console.log(`Send email to ${email} in ${after} ms.`);
    return true;
  }
  send(email: string): boolean {
    console.log(`Sent email to ${email} just now. `);
    return true;
  }
  queue(email: string): boolean {
    console.log(`Queue an email to ${email}.`);
    return true;
  }
}

//      Extending multiple interfaces :

/*
 *  interface C {
 *      c(): void
 *  }
 *
 *  interface D extends B, C {
 *      d(): void
 *  }
 */

class Control {
  private state: boolean;
}

interface StatefulControl extends Control {
  enable(): void;
}

class Button extends Control implements StatefulControl {
  enable() {}
}
class TextBox extends Control implements StatefulControl {
  enable() {}
}
class Label extends Control {}

// class Chart implements StatefulControl {
//   enable() {}
// }
// Error: cannot implement
// because the 'state' from 'Control' class that is extended in 'StatefulControl' interface
// //  is not going to be defined in "Chart" class
