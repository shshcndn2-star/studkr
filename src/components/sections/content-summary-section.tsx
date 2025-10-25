'use client';

import { useState } from 'react';
import { SectionWrapper } from "../shared/section-wrapper";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { summarizeContent } from '@/ai/flows/content-summarization-tool';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContentSummarySection() {
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast({
        title: "خطأ",
        description: "الرجاء إدخال محتوى لتلخيصه.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeContent({ content });
      setSummary(result.summary);
    } catch (error) {
      console.error('Summarization failed:', error);
      toast({
        title: "فشل التلخيص",
        description: "حدث خطأ أثناء محاولة تلخيص المحتوى.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="summarizer">
       <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline text-primary">أداة تلخيص المحتوى</h2>
        <p className="text-muted-foreground mt-2">
            ألصق محتوى مراجعة أو مقالة عن GT3 RS هنا للحصول على ملخص سريع.
        </p>
      </div>
      <Card className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <CardContent className='pt-6'>
            <Textarea
              placeholder="أدخل المحتوى هنا..."
              className="min-h-[150px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={isLoading}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="me-2 h-4 w-4 animate-spin" />
                  جاري التلخيص...
                </>
              ) : (
                'لخص المحتوى'
              )}
            </Button>
          </CardFooter>
        </form>
        {summary && (
          <div className="p-6 pt-0">
             <Card className="bg-muted">
                <CardHeader>
                    <CardTitle className="font-headline text-lg">الملخص</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{summary}</p>
                </CardContent>
             </Card>
          </div>
        )}
      </Card>
    </SectionWrapper>
  );
}
