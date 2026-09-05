import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews';
import { sounds } from '../utils/soundFx';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  GraduationCap, 
  ThumbsUp, 
  Sparkles,
  Plus,
  Send
} from 'lucide-react';

export const ReviewsSection = () => {
  const [reviewList, setReviewList] = useState(REVIEWS);
  const [selectedTag, setSelectedTag] = useState('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState({});

  const [newReview, setNewReview] = useState({
    author: '',
    college: '',
    course: '',
    kitPurchased: 'The 3 AM Maggi Master Bedkit',
    rating: 5,
    title: '',
    comment: ''
  });

  const TAGS = ['All', 'Maggi Proof Tested', 'Hostel Cot Fit', 'Roommate Deal', 'Deep Work Aesthetic', 'Chai Proof'];

  const filteredReviews = selectedTag === 'All'
    ? reviewList
    : reviewList.filter(r => r.tags?.some(t => t.toLowerCase().includes(selectedTag.toLowerCase())));

  const handleLike = (id) => {
    sounds.playPop();
    setLikedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    sounds.playChime();
    const created = {
      id: Date.now(),
      author: newReview.author || 'Hostel Resident',
      college: newReview.college || 'Campus Resident',
      course: newReview.course || 'Student',
      rating: Number(newReview.rating),
      date: 'Just now',
      title: newReview.title || 'Gamechanger for my hostel bed',
      comment: newReview.comment,
      verifiedStudent: true,
      kitPurchased: newReview.kitPurchased,
      tags: ['Verified Move-In']
    };

    setReviewList([created, ...reviewList]);
    setIsFormOpen(false);
    setNewReview({
      author: '',
      college: '',
      course: '',
      kitPurchased: 'The 3 AM Maggi Master Bedkit',
      rating: 5,
      title: '',
      comment: ''
    });
  };

  return (
    <section id="reviews" className="py-16 md:py-24 border-b border-dorm-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CAMPUS TESTED & APPROVED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Reviews From Hostels & PGs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Over 38,500 students across 180+ engineering, medical, law & management colleges trust DORMCOZY.
          </p>
        </div>

        {/* Rating Breakdown & Summary Bar */}
        <div className="bg-dorm-card border border-dorm-border rounded-2xl p-6 sm:p-8 mb-10 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Overall score */}
            <div className="md:col-span-4 text-center md:text-left md:border-r border-dorm-border md:pr-8 space-y-2">
              <div className="text-5xl font-extrabold text-white font-mono">
                4.92<span className="text-2xl text-slate-500 font-sans">/5</span>
              </div>
              <div className="flex justify-center md:justify-start text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400">
                Based on 3,890+ verified college resident reviews
              </p>
            </div>

            {/* Feature metric bars */}
            <div className="md:col-span-5 space-y-2.5 text-xs text-slate-300">
              <div>
                <div className="flex justify-between mb-1">
                  <span>🍜 Maggi & Chai Spill Repel:</span>
                  <span className="font-bold text-orange-400">99.8%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-dorm-bg overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full w-[99.8%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>🛏️ Cot Grip (Zero Untuck):</span>
                  <span className="font-bold text-emerald-400">98.5%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-dorm-bg overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[98.5%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>🧼 Quick-Dry & Zero Wrinkle:</span>
                  <span className="font-bold text-blue-400">99.1%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-dorm-bg overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[99.1%]" />
                </div>
              </div>
            </div>

            {/* Write a review button */}
            <div className="md:col-span-3 text-center">
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="px-5 py-3 rounded-xl bg-dorm-accent hover:bg-dorm-accentHover text-white font-bold text-xs shadow-glow flex items-center justify-center gap-2 mx-auto transition"
              >
                <Plus className="w-4 h-4" />
                <span>Write Student Review</span>
              </button>
            </div>

          </div>
        </div>

        {/* Optional Review Form Drawer */}
        {isFormOpen && (
          <form onSubmit={handleSubmitReview} className="bg-dorm-bg border border-orange-500/40 rounded-2xl p-6 mb-10 shadow-xl space-y-4 animate-in fade-in">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-orange-400" />
              <span>Share Your Hostel Experience</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-slate-300 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  placeholder="e.g. Rohan Sharma"
                  className="w-full bg-dorm-card border border-dorm-border rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">College & Hostel / PG</label>
                <input
                  type="text"
                  required
                  value={newReview.college}
                  onChange={(e) => setNewReview({ ...newReview, college: e.target.value })}
                  placeholder="e.g. BITS Pilani, Krishna Bhawan"
                  className="w-full bg-dorm-card border border-dorm-border rounded-lg px-3 py-2 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 block mb-1">Star Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                  className="w-full bg-dorm-card border border-dorm-border rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value={5}>5 Stars - 100% Spill Proof</option>
                  <option value={4}>4 Stars - Great Hostel Bed</option>
                  <option value={3}>3 Stars - Good</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1">Review Headline</label>
              <input
                type="text"
                required
                value={newReview.title}
                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                placeholder="e.g. Survived 3 AM Chai spill on exam eve!"
                className="w-full bg-dorm-card border border-dorm-border rounded-lg px-3 py-2 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1">Your Detailed Review</label>
              <textarea
                required
                rows={3}
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="How did the bedkit fit your cot? Did you test any spills?"
                className="w-full bg-dorm-card border border-dorm-border rounded-lg px-3 py-2 text-xs text-white"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="px-4 py-2 rounded-lg bg-dorm-card text-xs text-slate-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-dorm-accent text-white text-xs font-bold shadow-glow flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Review</span>
              </button>
            </div>
          </form>
        )}

        {/* Filter Tags */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedTag === tag
                  ? 'bg-dorm-accent text-white'
                  : 'bg-dorm-card hover:bg-dorm-cardHover text-slate-400 border border-dorm-border'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const isLiked = likedReviews[review.id];
            return (
              <div
                key={review.id}
                className="bg-dorm-card border border-dorm-border rounded-2xl p-5 shadow-card flex flex-col justify-between space-y-4 hover:border-slate-600 transition"
              >
                <div className="space-y-3">
                  {/* Author & College Tag */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-white">{review.author}</span>
                        {review.verifiedStudent && (
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-orange-400 font-medium">
                        {review.college}
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-500 font-mono">
                      {review.date}
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* Title & Comment */}
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white leading-snug">
                      "{review.title}"
                    </h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                      {review.comment}
                    </p>
                  </div>
                </div>

                {/* Footer with kit info and helpful button */}
                <div className="pt-3 border-t border-dorm-border/60 flex items-center justify-between text-xs text-dorm-textMuted">
                  <span className="text-[10px] text-slate-400 truncate max-w-[180px]">
                    📦 {review.kitPurchased}
                  </span>

                  <button
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded transition ${
                      isLiked ? 'text-orange-400 bg-orange-500/10' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful {isLiked ? '(1)' : ''}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
