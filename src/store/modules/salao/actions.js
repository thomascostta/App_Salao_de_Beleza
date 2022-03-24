import types from './types';

export function allServices(services) {
    return { type: types.ALL_SERVICES, services}
}