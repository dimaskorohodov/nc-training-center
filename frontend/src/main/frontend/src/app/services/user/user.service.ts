import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
import {UserSettings} from "../../models/user-settings";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    inputRegExp = new RegExp(/^(?=\D)+\w*$/);
    passwordRegExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
    emailRegExp = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);

    user: User;
    friend: User;
    book: Book;

    private siteUrl: string = 'https://nc-group1-2019.herokuapp.com';

    // siteUrl: string = 'http://localhost:8080';

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
        const url = `${this.siteUrl}/user/${id}` + '?access_token=' +
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
        let url = this.siteUrl + "/user/create/admin" +
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;
        console.log(url);
        return this.http.post<User>(url, admin);
    }

    // createModerator(): Observable<User> {
    //
    // }

    deactivateAccount(id: string) {
        let url = `${this.siteUrl}/user/${id}/deactivate` +
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;

        return this.http.get(url);
    }

    searchByUsername(username: string) {
        let url = `${this.siteUrl}/user/search/${username}` +
            '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;

        return this.http.get<userSearch[]>(url);
    }

    getAll() {
        let url = `${this.siteUrl}/user/get/all`;

        return this.http.get<userSearch[]>(url);
    }

    sendRequest(sender: number, receiver: number): Observable<User> {
        let url = `${this.siteUrl}/friends/send`;
        let form = new FormData();
        //form.append('sender', sender.toString());
        // form.append('receiver', receiver.toString());
        const params = new HttpParams()
            .set('sender', sender.toString()).set('reciever', receiver.toString());


        return this.http.post<User>(url, params);
    }


    getUserSettings(userId:number):Observable<UserSettings> {
        let params = new HttpParams().append(
            'userId', userId.toString()
        );

        let url = `${this.siteUrl}/getSettings`;
        return this.http.post<UserSettings>(url, params);
    }
    checkRequest(sender: number, receiver: number) {
        let url = `${this.siteUrl}/friends/check`;
        let form = new FormData();
        form.append('sender', sender.toString());
        form.append('receiver', receiver.toString());

        return this.http.post(url,form);
    }
}
