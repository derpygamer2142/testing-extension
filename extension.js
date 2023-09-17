class UserIPExtension {
  getInfo() {
    return {
      id: 'userip',
      name: 'User IP Address',
      blocks: [
        {
          opcode: 'getIP',
          blockType: Scratch.BlockType.REPORTER,
          text: 'User IP Address',
        },
      ],
    };
  }

  getIP() {
    // You can return a placeholder IP address here.
    return navigator.ipaddress;
  }
}

Scratch.extensions.register(new UserIPExtension());
