import React from 'react';

const Update = () => {
    return (
        <div>
            <div className='mt-16 lg:px-24 px-4 mr-4'>

                <form>
                    {/* for title  */}
                    <textarea
                        className="textarea textarea-primary tit h-20 mb-8 placeholder:text-3xl
    rounded-none"
                        placeholder='Write Title'
                        type="text" name='title'
                    ></textarea><br />

                    {/* Details for  */}
                    <textarea
                        className="textarea textarea-primary tit h-40 mb-8 placeholder:text-3xl
    rounded-none"
                        placeholder='Tell Your Story.....'
                        type="text" name='post'
                    ></textarea> <br />
                    <input className='btn rounded-full border-none' style={{ backgroundColor: '#1a8917' }} type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
};

export default Update;