



import AXIOS_API from "@/utils/axiosAPI"

export async function postImages(cloudName, formDate){
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formDate
    })

    const data = await res.json()

    const imageUlr = data["secure_url"]
   
    return imageUlr

}

export async function createNewListing(data, imageUrls) {
    const { data: newListing } = await AXIOS_API.post('/listing', { ...data, imageUrls })

    console.log(newListing)
    return newListing
}

// import AXIOS_API from "@/utils/axiosAPI";

// // Upload image to Cloudinary
// export async function postImages(cloudName, formData) {
//     const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
//         method: "POST",
//         body: formData,
//     });

//     // Check if the response is valid
//     if (!res.ok) {
//         console.error('Cloudinary upload failed:', res.status, await res.text());
//         throw new Error('Failed to upload image to Cloudinary');
//     }

//     const data = await res.json();
//     console.log('Cloudinary response:', data);

//     const imageUrl = data["secure_url"];
//     if (!imageUrl) {
//         throw new Error('No secure URL returned from Cloudinary');
//     }

//     return imageUrl;
// }

// // Create new listing
// export async function createNewListing(data, imageUrls) {
//     console.log('Payload to /listing:', { ...data, imageUrls });

//     // Call the Axios API instance
//     const response = await AXIOS_API.post('/listing', { ...data, imageUrls });

//     // Check if the response is valid
//     if (!response || !response.data) {
//         console.error('Failed to create listing:', response);
//         throw new Error('Failed to create listing');
//     }

//     console.log('Created new listing:', response.data);
//     return response.data;
// }
