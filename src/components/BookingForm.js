import React, { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className='border-2 p-12 m-12'>
                        <div className='my-4'>
                            <label htmlFor="book-date">Choose Date: </label>
                            <input className='bg-gray-300 ml-2 p-2' id='book-date' value={date} type='date' onChange={handleChange} required />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="book-time">Choose Time: </label>
                            <select className='bg-gray-300 ml-2 p-2' id='book-time' value={time} onChange={(e) => setTime(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}> {availableTimes} </option> })
                                }
                            </select>
                        </div>



                        <div className='my-4'>
                            <label htmlFor="book-guests">Number of guests: </label>
                            <input className='bg-gray-300 ml-2 p-2 w-14' id='book-guests' value={guest} min='1' type='number' onChange={(e) => setGuest(e.target.value)} />
                        </div>

                        <div className='my-4'>
                            <label htmlFor="book-occasion">Occasion: </label>
                            <select className='bg-gray-300 ml-2 p-2' id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>

                        <div className='my-4'>
                            <input className='bg-emerald-700 pt-2 mt-2 text-white p-3' type="submit" aria-label='On Click' value={"Make Your Reservation"} />
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;
