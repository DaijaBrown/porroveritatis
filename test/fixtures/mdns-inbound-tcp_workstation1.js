{ header: 
   { id: 0,
     qr: 1,
     opcode: 0,
     aa: 1,
     tc: 0,
     rd: 0,
     ra: 0,
     res1: 0,
     res2: 0,
     res3: 0,
     rcode: 0 },
  question: [ { name: '_workstation._tcp.local', type: 12, class: 1 } ],
  answer: 
   [ { name: '_workstation._tcp.local',
       type: 12,
       class: 1,
       ttl: 10,
       data: 'regin [30:46:9a:b2:b8:b2]._workstation._tcp.local' },
     { name: 'regin [30:46:9a:b2:b8:b2]._workstation._tcp.local',
       type: 16,
       class: 1,
       ttl: 10,
       data: [ '' ] },
     { name: 'regin [30:46:9a:b2:b8:b2]._workstation._tcp.local',
       type: 33,
       class: 1,
       ttl: 10,
       priority: 0,
       weight: 0,
       port: 9,
       target: 'regin.local' },
     { name: 'regin.local',
       type: 1,
       class: 1,
       ttl: 10,
       address: '10.100.0.61' } ],
  authority: [],
  additional: [],
  edns_options: [],
  payload: undefined }