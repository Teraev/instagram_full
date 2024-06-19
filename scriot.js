const container = document.querySelector('.container')

const mainUsers = document.createElement('div');
mainUsers.classList.add('main_users');





const left_side = document.createElement("div")
left_side.classList.add("left_turn")

const userss = document.createElement("div")
userss.classList.add("users")

const userBox = document.createElement("div");
userBox.classList.add("user_box");

const body = document.querySelector('body');
const exit = document.querySelector('.content-options')
const lik = document.querySelector('.content-like')
const like2 = document.querySelector('.like2')
const closeModal = document.querySelector('.close');
const modal2 = document.querySelector('.modal');
const modal = document.querySelector(".postModal")
const modal_photo = document.querySelector('.mod_photo')
const commentsList = document.getElementById('commentsList');
const img_content = document.querySelector('.img_content')
const nik_modal = document.querySelector('.nik_modal')
const nameCom = document.querySelector(".nameCom")
const photoCom = document.querySelector('.imgCom')
const co = document.querySelector('.co')
const img_modal = document.querySelector('.img_modal')
const sun = document.querySelector('.sun')

let like_kom = false

lik.onclick = () => {
    if (like_kom === false) {
        like2.src = './img/heart2.png'
        like_kom = true
    } else {
        like2.src = './img/like.png'
        like_kom = false
    }
}
fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')
    .then((res) => res.json())
    .then((users) => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
            .then((res) => res.json())
            .then((photos) => {
                reload(users, photos);

            });
    });

function reload(users, photos) {
    users.forEach((user, index) => {
        const story = document.createElement("div");
        story.classList.add("storys");

        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
        avatar.src = photos[index].url;
        avatar.alt = "";

        const span = document.createElement("span");
        span.classList.add("nick");

        if (user.name.length > 10) {
            span.innerHTML = user.name.slice(0, 12) + '...'
        } else {
            span.innerHTML = user.name;
        }

        story.append(avatar);
        story.append(span);

        userBox.append(story);
        userss.append(userBox);

        avatar.onclick = () => {
            modal2.style.display = 'flex';
            img_modal.src = photos[index].url
        };
    })
}

closeModal.onclick = () => {
    modal2.style.display = "none";
}




fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10')
    .then((res) => res.json())
    .then((users) => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
            .then((res) => res.json())
            .then((photos) => {
                reloadPosts(users, photos);

            });
    });




const post = document.createElement('div');
post.classList.add('post');


function reloadPosts(users, photos) {
    const mainUser = document.createElement('div');
    mainUser.classList.add('main_user');

    const mainImg = document.createElement('img');
    mainImg.classList.add('main_img');
    mainImg.src = './img/radmir.jpg';
    mainImg.alt = '';

    const mainUserName = document.createElement('p');
    mainUserName.textContent = 't.e.r.a.e.v';

    mainUser.appendChild(mainImg);
    mainUser.appendChild(mainUserName);

    const hr = document.createElement('hr');

    mainUsers.append(mainUser, hr);



    users.forEach((user, index) => {




        const othersUsers = document.createElement('div');
        othersUsers.classList.add('others_users');

        const otherImg = document.createElement('img');
        otherImg.classList.add('other_img');
        otherImg.src = photos[index].url;
        otherImg.alt = '';

        const otherUserName = document.createElement('p');
        otherUserName.textContent = user.name;

        othersUsers.append(otherImg, otherUserName);

        mainUsers.append(othersUsers);

        const poster = document.createElement('div');
        poster.classList.add('poster');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post_header');

        const postData = document.createElement('div');
        postData.classList.add('postData');

        const postAvatar = document.createElement('div');
        postAvatar.classList.add('post_avatar');
        const avatarImg = document.createElement('img');
        avatarImg.src = photos[index].url;
        avatarImg.alt = "";
        postAvatar.append(avatarImg);

        const postNick = document.createElement('div');
        postNick.classList.add('post_nick');
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        if (user.name.length > 10) {
            nameSpan.innerHTML = user.name.slice(0, 6)
        } else {
            nameSpan.innerHTML = user.name;
        }
        const countrySpan = document.createElement('span');
        countrySpan.classList.add("country");
        countrySpan.textContent = "Samararqand";
        postNick.append(nameSpan);
        postNick.append(countrySpan);

        const dotButton = document.createElement("button");
        dotButton.classList.add('dot');
        const dotImg = document.createElement("img");
        dotImg.src = "./img/dou.png";
        dotImg.alt = "";
        dotButton.append(dotImg);

        postData.append(postAvatar);
        postData.append(postNick);
        postData.append(dotButton);

        postHeader.append(postData);


        const postPhoto = document.createElement('div');
        postPhoto.classList.add('post_photo');
        const photoImg = document.createElement('img');
        photoImg.src = photos[index].url;
        photoImg.alt = "";
        postPhoto.append(photoImg);

        const postInfo = document.createElement('div');
        postInfo.classList.add('post_info');

        const reacts = document.createElement('div');
        reacts.classList.add('reacts');

        const leftReacts = document.createElement('div');
        leftReacts.classList.add('left_reacts');

        const likeButton = document.createElement('button');
        const likeImg = document.createElement('img');
        likeImg.src = './img/like.png';
        likeImg.setAttribute('alt', '');
        likeButton.append(likeImg);

        const commentButton = document.createElement('button');
        const commentImg = document.createElement('img');
        commentImg.src = './img/comment.png';
        commentImg.setAttribute('alt', '');
        commentButton.append(commentImg);

        const planButton = document.createElement('button');
        const planImg = document.createElement('img');
        planImg.src = './img/plan.png';
        planImg.setAttribute('alt', '');
        planButton.append(planImg);

        leftReacts.append(likeButton);
        leftReacts.append(commentButton);
        leftReacts.append(planButton);

        const rightReacts = document.createElement('div');
        rightReacts.classList.add('right_reacts');

        const addButton = document.createElement('button');
        const addImg = document.createElement('img');
        addImg.src = './img/Add.svg';

        addButton.append(addImg);

        rightReacts.append(addButton);

        reacts.append(leftReacts);
        reacts.append(rightReacts);

        const postLikes = document.createElement('span');
        postLikes.classList.add('post_likes');
        postLikes.textContent = '9,999 likes';

        const postWrite = document.createElement('div');
        postWrite.classList.add('post_write');

        const boldText = document.createElement('b');
        boldText.classList.add('bold')
        boldText.textContent = user.name;
        const paragraph = document.createElement('p');
        paragraph.textContent = photos[index].title;

        postWrite.append(boldText);
        postWrite.append(paragraph);

        const postComments = document.createElement('div');
        postComments.classList.add('post_comments');

        const comments1 = document.createElement('div');
        comments1.classList.add('comments');

        const comment1 = document.createElement('div');
        comment1.textContent = 'Lorem ipsum dolor sit amet.';
        comments1.append(comment1);

        const comments2 = document.createElement('div');
        comments2.classList.add('comments');

        const comment2 = document.createElement('div');
        comment2.textContent = 'Lorem ipsum dolor sit amet.';
        comments2.append(comment2);

        const allComments = document.createElement('div');
        allComments.classList.add('all_comments');

        const viewAllComments = document.createElement('span');
        viewAllComments.textContent = 'View all comments...';

        allComments.append(viewAllComments);

        postComments.append(comments1);
        postComments.append(comments2);
        postComments.append(allComments);

        const write = document.createElement('div');
        write.classList.add('write');

        const writeSmileButton = document.createElement('button');
        writeSmileButton.classList.add('write_smile');
        const smileImg = document.createElement('img');
        smileImg.setAttribute('src', './img/smiley_icon-icons.com_69900.svg');
        smileImg.setAttribute('alt', '');
        writeSmileButton.append(smileImg);

        const commentInput = document.createElement('input');
        commentInput.setAttribute('type', 'text');
        commentInput.setAttribute('placeholder', 'add a comment...');

        const sendPostButton = document.createElement('button');
        sendPostButton.classList.add('send_post');
        sendPostButton.textContent = 'Post';
        write.append(writeSmileButton);
        write.append(commentInput);
        write.append(sendPostButton);

        postInfo.append(reacts);
        postInfo.append(postLikes);
        postInfo.append(postWrite);
        postInfo.append(postComments);
        postInfo.append(write);

        poster.append(postHeader, postPhoto, postInfo)
        post.append(poster);


  


        let like = false

        likeButton.onclick = () => {
            if (like === false) {
                likeImg.src = './img/heart2.png'
                like2.src = './img/heart2.png'
                like = true
            } else {
                likeImg.src = './img/like.png'
                like2.src = './img/like.png'
                like = false
            }
        }

        
        let add = false

        addButton.onclick = () => {
            if (add === false) {
                addImg.src = './img/favorite.png'
                add2.src = './img/favorite.png'
                add = true
            } else {
                addImg.src = './img/Add.svg'
                add2.src = './img/Add.svg'
                add = false
            }
        }

      


        commentImg.onclick = () => {
            container.style.display = "none"
            modal.style.display = "flex"
        }
        exit.onclick = () => {
            modal.style.display = "none"
            container.style.display = "flex"
        }

        commentImg.onclick = () => {
            container.style.display = "none";
            modal.style.display = 'block';

            const Id = photos[index].id;

            fetch('https://jsonplaceholder.typicode.com/comments/')
                .then(response => response.json())
                .then(data => {
                    commentsList.innerHTML = '';
                    for (let i = 0; i < data.length; i++) {
                        const comment = data[i];

                        if (comment.postId === Id) {
                            const li = document.createElement('li');
                            const p = document.createElement('p');
                            nik_modal.innerHTML = user.name
                            img_content.src = photos[index].url;
                            modal_photo.src = photos[index].url;
                            p.textContent = comment.email;
                            li.textContent = comment.body;
                            commentsList.append(li);
                            li.append(p);
                        }
                    }
                });

                
        };




        return post

    })

};
left_side.append(userss, post);
container.append(left_side, mainUsers)





let suns = false;
const logo = document.querySelector('.logo')
const likes = document.querySelector('.lik')
const hed_saray = document.querySelector('.hed_saray')
const chat = document.querySelector('.chat')
const navigator = document.querySelector('.navigator')
const content_like = document.querySelector('.like2')
const coment2 = document.querySelector('.coment2')
const add2 = document.querySelector('.add2')
const plan2 = document.querySelector('.plan2')

sun.onclick = () => {
    if (suns === false) {
        sun.src = './img/black_sun.svg';
        suns = true;
        body.classList.add('black_tem');
        likes.src = './img/white_like.svg'
        hed_saray.src = './img/white_home.svg'
        chat.src = './img/white_messages.svg'
        navigator.src = './img/white_navigator.svg'
        logo.src = './img/lightLogo.svg'
        content_like.src = './img/white_like.svg'
        coment2.src = './img/white_messages.svg'
        add2.src = './img/white_favorite.svg'
        plan2.src = './img/white_plan.svg'
    } else {
        sun.src = './img/white_sun.svg';
        suns = false;
        body.classList.remove('black_tem');
        likes.src = './img/like.png'
        hed_saray.src = './img/saray.png'
        chat.src = './img/chat.png'
        navigator.src = './img/interesting.png'
        logo.src = './img/insta.png'
        content_like.src = './img/like.png'
        coment2.src = './img/comment.png'
        add2.src = './img/favorite.png'
        plan2.src = './img/plan.png'
    }
}



let profile = document.querySelector('.head_circle')

profile.onclick = () => {
    window.location.href = "./index2.html";
}

