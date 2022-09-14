import axios from "axios";

const BASE_URL='http://localhost:8080';

export async function findAllPosts() {
  return await axios.get(`${BASE_URL}/posts`);
}

export async function findPostById(id) {
  return await axios.get(`${BASE_URL}/posts/${id}`)
}

export async function getAllPostIds() {
  const response = await findAllPosts()
  const posts = response.data 

  return posts.map((item) => {
    return {
      params: {
        id: item.id + ""
      }
    }
  })
}