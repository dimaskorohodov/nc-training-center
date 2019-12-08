import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../common/common.service';
import {User} from "../../models/user";
import {Book} from "../../models/book";
import {Announcement} from "../../models/announcement";
import {Review} from "../../models/review";
import {Chat} from "../../models/chat";
import {Message} from "../../models/message";
import {BookFilter} from "../../models/bookfilter";
import {Observable} from "rxjs";
import {userSearch} from "../../models/userSearch";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: User;
    friend: User;
    book: Book;
    siteUrl: string = 'https://nc-group1-2019-project.herokuapp.com';
    //siteUrl: string = 'http://localhost:8080';

    constructor(private http: HttpClient, private commonService: CommonService) {
    }

    // Personal methods
    updateProfile(user: User) {
        let url = `${this.siteUrl}/user/update` +
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;
        let form = new FormData();

        form.append('login', user.userName);
        form.append('newPassword', user.userPassword);
        form.append('newEmail', user.email);

        return this.http.post<User>(url, form);
    }

    searchUser(id: string) {
        const url = `${this.siteUrl}/user/`+ id + '?access_token=' +
            JSON.parse(window.sessionStorage.getItem('token')).access_token;
        return this.http.get<User>(url);
    }

    getFriends() {

    }

    addFriend(friend: User) {

    }

    removeFriend(friend: User) {

    }

    manageFriendActivities() {

    }

    proposeAnnouncement(announcement: Announcement) {

    }

    proposeBookOverview(book: Book) {

    }

    proposeBookReview(book: Book, review: Review) {

    }

    addBookToRead(book: Book) {

    }

    addBookToFavourite(book: Book) {

    }

    removeBookFromRead(book: Book) {

    }

    removeBookFromFavourite(book: Book) {

    }

    manageCalendar() {

    }

    createChat() {

    }

    changeChatName(chat: Chat) {

    }

    addFriendToChat(friend: User, chat: Chat) {

    }

    sendMessage(message: Message) {

    }

    saveHistory() {

    }

    leaveChat() {

    }

    //#region Common service

    getBooks() {
        this.commonService.getBooks();
    }

    getBooksByFilter(filter: BookFilter) {
        this.commonService.getBooksByFilter(filter);
    }

    /*getBookByName(name: string) {
        this.commonService.getBookByName(name);
    }*/

    getAnnouncements() {
        this.commonService.getAnnouncements();
    }

    getAnnouncementsByFilter() {
        // this.commonService.getAnnouncementsByFilter();

    }

    getReviews(book: Book) {
        // this.commonService.getReviews(book);
    }

    recoverPassword() {
        this.commonService.recoverPassword();
    }

    manageNotifications() {
        this.commonService.manageNotifications();
    }

    login() {
        this.commonService.login();
    }

    equals(user1: User, user2: User): boolean {
        return user1.email == user2.email && user1.userPassword == user2.userPassword;
    }

    createAdmin(admin: User): Observable<User> {
        let url = this.siteUrl + "/user/create/admin"+
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;
        console.log(url);
        return this.http.post<User>(url, admin);
    }

    // createModerator(): Observable<User> {
    //
    // }

    deactivateAccount(id: string) {
        let url = `${this.siteUrl}/user/${id}/deactivate`+
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;

        return this.http.get(url);
    }

    searchByUsername(username: string) {
        let url = `${this.siteUrl}/user/search/${username}`+
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;

        return this.http.get<userSearch[]>(url);
    }

    getAll() {
        let url = `${this.siteUrl}/user/get/all`;

        return this.http.get<userSearch[]>(url);
    }
}
