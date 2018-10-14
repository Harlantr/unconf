import baseApi from '../';

export const getEvents = () => baseApi.get('/events');

export const updateEvent = event => baseApi.put(`/events/${event._id}`, event);
