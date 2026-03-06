import Time "mo:core/Time";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type ServiceInterest = {
    #socialMediaManagement;
    #seo;
    #paidAds;
    #googleAds;
    #consulting;
    #workshop;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    serviceInterest : ServiceInterest;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  var nextSubmissionId = 0;
  let submissions = Map.empty<Nat, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    message : Text,
    serviceInterest : ServiceInterest,
  ) : async () {
    let submission : ContactSubmission = {
      name;
      email;
      message;
      serviceInterest;
      timestamp = Time.now();
    };
    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };
};
