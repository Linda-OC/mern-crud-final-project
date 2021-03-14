import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Once the tallest building in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Empire_State_Building_ags.JPG/685px-Empire_State_Building_ags.JPG',
        address: '350 5th Ave, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'EMPIRE State Building',
        description: 'Once the tallest building in the world',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Empire_State_Building_ags.JPG/685px-Empire_State_Building_ags.JPG',
        address: '350 5th Ave, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }

];
const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;