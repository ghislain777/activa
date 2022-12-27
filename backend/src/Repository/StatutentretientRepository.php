<?php

namespace App\Repository;

use App\Entity\Statutentretient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Statutentretient|null find($id, $lockMode = null, $lockVersion = null)
 * @method Statutentretient|null findOneBy(array $criteria, array $orderBy = null)
 * @method Statutentretient[]    findAll()
 * @method Statutentretient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatutentretientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Statutentretient::class);
    }

    // /**
    //  * @return Statutentretient[] Returns an array of Statutentretient objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Statutentretient
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
