import { Component } from '@angular/core';

@Component({
  selector: 'close',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    width="10px"
    height="10px"
  >
    <g>
      <path
        fill="#ffffff"
        d="M617.2,495.8l349.1,350.9c31.7,31.8,31.7,83.5,0,115.3c-31.7,31.9-83.1,31.9-114.8,0L502.4,611.2L149.8,965.6c-32,32.2-83.8,32.2-115.8,0c-32-32.1-32-84.3,0-116.4l352.6-354.5L48.2,154.6c-31.7-31.9-31.7-83.5,0-115.4c31.7-31.9,83.1-31.9,114.7,0l338.4,340.2l343.3-345c32-32.1,83.8-32.1,115.8,0c32,32.2,32,84.3,0,116.4L617.2,495.8z"
      />
    </g>
  </svg>`,
})
export class CloseIcon {
  constructor() {}
}
