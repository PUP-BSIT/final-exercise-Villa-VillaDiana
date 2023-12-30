let nameField = document.getElementById("name");
let commentField = document.getElementById("user_comment");
let commentList = [];

function newComment() {
  if (nameField.value.length && commentField.value.length) {
    document.getElementById("comment_btn").disabled = false;
  } else {
    document.getElementById("comment_btn").disabled = true;
  }
}

function addComment() {
  const fullName = nameField.value;
  const userComment = commentField.value;
  const currentDate = new Date();
  const contentList = {
    fullName: fullName,
    userComment: userComment,
    date: currentDate.toLocaleString(),
  };

  commentList.push(contentList);
  showComments();
}

function showComments() {
  const commentContainer = document.querySelector("#new_comment_container");
  commentContainer.innerHTML = "";
  for (const comment of commentList) {
    let commentDetails = document.createElement("div");
    commentDetails.classList.add("comment-details");

    let userImg = document.createElement("img");
    userImg.src = "images/avatar.png";
    userImg.alt = "User image";

    let author = document.createElement("span");
    let commentContent = document.createElement("p");
    let commentDate = document.createElement("p");

    author.classList.add("comment-author");
    commentContent.classList.add("comment-text");

    author.textContent = comment.fullName;
    commentContent.textContent = comment.userComment;
    commentDate.textContent = comment.date;

    let likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = "Like";

    let replyButton = document.createElement("button");
    replyButton.classList.add("reply-button");
    replyButton.textContent = "Reply";

    commentDetails.append(author);
    commentDetails.append(commentContent);
    commentDetails.append(commentDate);
    commentDetails.append(likeButton);
    commentDetails.append(replyButton);

    let commentSection = document.createElement("div");
    commentSection.classList.add("comment");
    commentSection.append(userImg);
    commentSection.append(commentDetails);
    commentContainer.appendChild(commentSection);

    nameField.value = "";
    commentField.value = "";
    document.querySelector("#comment_btn").disabled = true;
  }
}

function ascendingOrder() {
  commentList.sort((commentA, commentB) => {
    const commentADate = new Date(commentA.date);
    const commentBDate = new Date(commentB.date);
    return commentADate - commentBDate;
  });

  showComments();
}

function descendingOrder() {
  commentList.sort((commentA, commentB) => {
    const commentADate = new Date(commentA.date);
    const commentBDate = new Date(commentB.date);
    return commentBDate - commentADate;
  });

  showComments();
}