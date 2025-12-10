import Image from 'next/image';

export default function MoveInCleaningPage() {
    return (
        <div className="flex items-center justify-center py-20">
            <h1 className="text-3xl font-bold">입주, 이사 청소 페이지</h1>
        </div>
    );
}

{/* 
export default function MoveInCleaningPage() {
    return (
        <div>
            {/* Hero Section *\/}
            <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center overflow-hidden">
                {/* Background Image *\/}
                <Image
                    src="/move_in_cleaning/hero.jpg"
                    alt="입주, 이사 청소 서비스"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Semi-transparent Left Overlay *\/}
                <div className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                {/* Content *\/}
                <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
                    <div className="max-w-2xl">
                        {/* Badge *\/}
                        <div className="inline-block mb-6">
                            <span className="bg-sky-500/90 text-white px-6 py-2 rounded-full font-semibold text-sm md:text-base shadow-lg backdrop-blur-sm">
                                입주·이사 청소 전문
                            </span>
                        </div>

                        {/* Title *\/}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                            새로운 시작을 위한
                            <br />
                            완벽한 청소
                        </h1>

                        {/* Description *\/}
                        <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
                            입주와 이사의 첫 순간을 깨끗하고 상쾌하게 시작하세요.
                            <br />
                            전문가의 손길로 새 공간을 완벽하게 준비해드립니다.
                        </p>

                        {/* Features *\/}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-lg">
                                <p className="text-white font-semibold">✓ 전문 장비 사용</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-lg">
                                <p className="text-white font-semibold">✓ 당일 예약 가능</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-lg">
                                <p className="text-white font-semibold">✓ 꼼꼼한 마무리</p>
                            </div>
                        </div>

                        {/* CTA Button *\/}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://pf.kakao.com/_xjHxjxjG/chat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                카톡 상담하기
                            </a>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105">
                                서비스 자세히 보기
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Content Section *\/}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        입주·이사 청소 서비스 상세
                    </h2>
                    <div className="text-center text-gray-600">
                        <p className="text-lg">서비스 상세 내용이 여기에 추가됩니다.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
*/}
