import asyncComponent from '../lib/asyncComponent.js';

export const WorkList = asyncComponent(() => import('./product/work-list'));
